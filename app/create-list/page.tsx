"use client"

import { useState, useCallback } from "react"
import { Search, Heart, List, X, Phone, Globe, Star, MapPin } from "lucide-react"
import { GoogleMap, LoadScript, Autocomplete, Marker, InfoWindow } from "@react-google-maps/api"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const mapContainerStyle = { width: "100%", height: "100%" }
const defaultCenter = { lat: 43.6532, lng: -79.3832 }

export default function BusinessSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [map, setMap] = useState(null)
  const [autocomplete, setAutocomplete] = useState(null)
  const [businesses, setBusinesses] = useState([])
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [savedBusinesses, setSavedBusinesses] = useState([])
  const [showSavedList, setShowSavedList] = useState(false)
  const [selectedMarker, setSelectedMarker] = useState(null)

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!map) return

    const placesService = new google.maps.places.PlacesService(map)
    setBusinesses([]) // Clear previous results

    const request = {
      location: defaultCenter,
      radius: 5000,
      query: searchTerm,
    }

    placesService.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Get detailed information for each place
        results.forEach((place) => {
          const detailRequest = {
            placeId: place.place_id,
            fields: ['name', 'rating', 'formatted_phone_number', 'website', 'reviews', 'opening_hours', 'price_level']
          }
          
          placesService.getDetails(detailRequest, (placeResult, detailStatus) => {
            if (detailStatus === google.maps.places.PlacesServiceStatus.OK) {
              const enhancedPlace = {
                ...place,
                details: placeResult
              }
              setBusinesses(prev => [...prev.filter(b => b.place_id !== place.place_id), enhancedPlace])
            }
          })
        })
      }
    })
  }

  const handleMarkerClick = useCallback((business) => {
    setSelectedMarker(business)
    setSelectedBusiness(business)
    // Center map on selected business
    if (map && business.geometry) {
      map.panTo({
        lat: business.geometry.location.lat(),
        lng: business.geometry.location.lng()
      })
    }
  }, [map])

  const handleSaveBusiness = (business) => {
    if (!savedBusinesses.find(b => b.place_id === business.place_id)) {
      setSavedBusinesses([...savedBusinesses, business])
    }
  }

  const removeSavedBusiness = (businessId) => {
    setSavedBusinesses(savedBusinesses.filter(b => b.place_id !== businessId))
  }

  const formatRating = (rating) => {
    return rating ? `${rating.toFixed(1)} ⭐` : 'No rating'
  }

  const getPriceLevel = (level) => {
    return level ? '💰'.repeat(level) : 'Price not available'
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} libraries={["places"]}>
      <div className="h-screen flex flex-col pt-20 overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 border-b">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Autocomplete
                onLoad={setAutocomplete}
                onPlaceChanged={() => {
                  if (autocomplete) {
                    setSearchTerm(autocomplete.getPlace().name)
                  }
                }}
              >
                <Input
                  type="text"
                  placeholder="Enter business keyword (e.g., restaurants)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
              </Autocomplete>
              <Button type="submit">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowSavedList(!showSavedList)}
                className={showSavedList ? "bg-gray-100" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex relative">
          {/* Business List */}
          <div className="w-96 border-r overflow-y-auto">
            {businesses.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Search for businesses to see results
              </div>
            ) : (
              businesses.map((business) => (
                <div
                  key={business.place_id}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedBusiness?.place_id === business.place_id ? "bg-gray-50" : ""
                  }`}
                  onClick={() => handleMarkerClick(business)}
                >
                  <h3 className="font-medium">{business.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{business.details?.rating && formatRating(business.details.rating)}</span>
                    <span>{business.details?.price_level && getPriceLevel(business.details.price_level)}</span>
                  </div>
                  <p className="text-sm text-gray-500">{business.formatted_address}</p>
                </div>
              ))
            )}
          </div>

          {/* Map */}
          <div className="flex-1">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={defaultCenter}
              zoom={14}
              onLoad={setMap}
            >
              {businesses.map((business) => (
                <Marker
                  key={business.place_id}
                  position={{
                    lat: business.geometry.location.lat(),
                    lng: business.geometry.location.lng(),
                  }}
                  onClick={() => handleMarkerClick(business)}
                />
              ))}
              
              {selectedMarker && (
                <InfoWindow
                  position={{
                    lat: selectedMarker.geometry.location.lat(),
                    lng: selectedMarker.geometry.location.lng(),
                  }}
                  onCloseClick={() => {
                    setSelectedMarker(null)
                    setSelectedBusiness(null)
                  }}
                  options={{
                    pixelOffset: new google.maps.Size(0, -30),
                    maxWidth: 320
                  }}
                >
                  <div className="max-h-[400px] overflow-y-auto">
                    <Card className="w-72 shadow-none border-0">
                      <CardHeader className="p-3">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg leading-tight">{selectedMarker.name}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => handleSaveBusiness(selectedMarker)}
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {selectedMarker.details?.rating && (
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {formatRating(selectedMarker.details.rating)}
                            </span>
                          )}
                          {selectedMarker.details?.price_level && (
                            <span>{getPriceLevel(selectedMarker.details.price_level)}</span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 p-3">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{selectedMarker.formatted_address}</span>
                        </p>
                        {selectedMarker.details?.formatted_phone_number && (
                          <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{selectedMarker.details.formatted_phone_number}</span>
                          </p>
                        )}
                        {selectedMarker.details?.website && (
                          <p className="flex items-start gap-2">
                            <Globe className="w-4 h-4 mt-1 flex-shrink-0" />
                            <a 
                              href={selectedMarker.details.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-sm text-blue-600 hover:underline break-words"
                            >
                              {new URL(selectedMarker.details.website).hostname}
                            </a>
                          </p>
                        )}
                      </CardContent>
                      {selectedMarker.details?.reviews && (
                        <CardFooter className="flex-col space-y-2 p-3 pt-0">
                          <h4 className="font-semibold text-sm w-full">Recent Reviews</h4>
                          {selectedMarker.details.reviews.slice(0, 2).map((review, index) => (
                            <div key={index} className="w-full border-t pt-2">
                              <div className="flex items-center gap-1 mb-1">
                                <Star className="w-3 h-3" />
                                <span className="text-sm">{review.rating}</span>
                              </div>
                              <p className="text-sm text-gray-600">{review.text}</p>
                            </div>
                          ))}
                        </CardFooter>
                      )}
                    </Card>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>

          {/* Saved Businesses Sidebar */}
          {showSavedList && (
            <div className="w-80 border-l overflow-y-auto">
              <div className="p-4 border-b">
                <h2 className="font-bold">Saved Businesses</h2>
              </div>
              <div className="p-4">
                {savedBusinesses.map((business) => (
                  <div key={business.place_id} className="mb-4 p-3 border rounded-lg relative group">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                      onClick={() => removeSavedBusiness(business.place_id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <div 
                      className="cursor-pointer"
                      onClick={() => handleMarkerClick(business)}
                    >
                      <p className="font-medium">{business.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{business.details?.rating && formatRating(business.details.rating)}</span>
                        <span>{business.details?.price_level && getPriceLevel(business.details.price_level)}</span>
                      </div>
                      <p className="text-sm text-gray-500">{business.formatted_address}</p>
                    </div>
                  </div>
                ))}
                {savedBusinesses.length === 0 && (
                  <p className="text-gray-500 text-sm">No saved businesses yet</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </LoadScript>
  )
}