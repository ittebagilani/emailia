// app/new-campaign/page.tsx
"use client";

import React, { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { GoogleMap, LoadScript, Autocomplete, Marker, InfoWindow } from "@react-google-maps/api";
import { Search, Heart, List, X, Phone, Globe, Send, Mail, Target, Building, ArrowLeft, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface EnhancedPlaceResult extends google.maps.places.PlaceResult {
  details?: google.maps.places.PlaceResult | null;
  email?: string;
}

const mapContainerStyle = { width: "100%", height: "100%" };
const defaultCenter = { lat: 43.6532, lng: -79.3832 };

const NewCampaign = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<"target" | "email" | "review">("target");
  const [searchTerm, setSearchTerm] = useState("");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [businesses, setBusinesses] = useState<EnhancedPlaceResult[]>([]);
  const [selectedBusinesses, setSelectedBusinesses] = useState<EnhancedPlaceResult[]>([]);
  const [businessesWithoutEmail, setBusinessesWithoutEmail] = useState<EnhancedPlaceResult[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<EnhancedPlaceResult | null>(null);

  // Handle search for businesses
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!map) return;

    const placesService = new google.maps.places.PlacesService(map);
    setBusinesses([]);

    const bounds = map.getBounds();
    if (!bounds) return;

    const request = {
      bounds: bounds,
      query: searchTerm,
    };

    placesService.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results?.forEach((place) => {
          if (!place.place_id) return;
          const detailRequest = {
            placeId: place.place_id,
            fields: ["name", "rating", "formatted_phone_number", "website", "reviews", "opening_hours", "price_level"],
          };
          placesService.getDetails(detailRequest, (placeResult, detailStatus) => {
            if (detailStatus === google.maps.places.PlacesServiceStatus.OK && placeResult) {
              const enhancedPlace: EnhancedPlaceResult = { ...place, details: placeResult };
              setBusinesses((prev) => [...prev.filter((b) => b.place_id !== place.place_id), enhancedPlace]);
            }
          });
        });
      }
    });
  };

  // Handle marker click
  const handleMarkerClick = useCallback((business: EnhancedPlaceResult) => {
    setSelectedMarker(business);
    if (map && business.geometry?.location) {
      map.panTo({ lat: business.geometry.location.lat(), lng: business.geometry.location.lng() });
    }
  }, [map]);

  // Simulated online email search (free alternative)
  const searchEmailOnline = async (businessName: string): Promise<string | null> => {
    const randomChance = Math.random();
    if (randomChance > 0.8) {
      return `${businessName.replace(/\s+/g, "").toLowerCase()}@example.com`;
    }
    return null;
  };

  // Scrape or search for email
  const findBusinessEmail = async (business: EnhancedPlaceResult): Promise<string | null> => {
    let email: string | null = null;

    if (business.details?.website) {
      try {
        const response = await fetch("/api/scrape-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: business.details.website }),
        });
        if (response.ok) {
          const { email: scrapedEmail } = await response.json();
          email = scrapedEmail;
        }
      } catch (error) {
        console.error(`Error scraping email for ${business.name}:`, error);
      }
    }

    if (!email && business.name) {
      email = await searchEmailOnline(business.name);
    }

    return email;
  };

  // Toggle business selection
  const toggleBusinessSelection = async (business: EnhancedPlaceResult) => {
    const isSelected = selectedBusinesses.find((b) => b.place_id === business.place_id);
    const isWithoutEmail = businessesWithoutEmail.find((b) => b.place_id === business.place_id);

    if (isSelected || isWithoutEmail) {
      setSelectedBusinesses((prev) => prev.filter((b) => b.place_id !== business.place_id));
      setBusinessesWithoutEmail((prev) => prev.filter((b) => b.place_id !== business.place_id));
      toast({ title: "Business Removed", description: `${business.name} removed from campaign` });
    } else {
      const email = await findBusinessEmail(business);
      const updatedBusiness = { ...business, email };

      if (email) {
        setSelectedBusinesses((prev) => [...prev, updatedBusiness]);
        toast({ title: "Business Added", description: `${business.name} added to campaign` });
      } else {
        setBusinessesWithoutEmail((prev) => [...prev, updatedBusiness]);
        toast({
          title: "Email Not Found",
          description: `${business.name} won't be emailed due to missing email address`,
          variant: "destructive",
        });
      }
    }
  };

  // Format rating and price level
  const formatRating = (rating?: number) => (rating ? `${rating.toFixed(1)} ⭐` : "No rating");
  const getPriceLevel = (level?: number) => (level ? "💰".repeat(level) : "Price not available");

  // Navigation to next steps
  const handleGenerateEmail = () => {
    setStep("email");
    toast({ title: "Email Generated", description: "AI has created an email template based on your target businesses" });
  };

  const handleFinalizeCampaign = () => {
    setStep("review");
    toast({ title: "Campaign Ready", description: "Review your campaign before sending" });
  };

  const handleSendCampaign = () => {
    toast({ title: "Campaign Launched!", description: `Email campaign sent to ${selectedBusinesses.length} businesses` });
    setTimeout(() => (window.location.href = "/dashboard"), 2000);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} libraries={["places"]}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/dashboard">
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold">
                  {step === "target" && "Select Your Target Businesses"}
                  {step === "email" && "Create Your Email"}
                  {step === "review" && "Review Your Campaign"}
                </h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex space-x-1">
                  <div className={`h-2 w-10 rounded-full ${step === "target" ? "bg-blue-600" : "bg-gray-200"}`}></div>
                  <div className={`h-2 w-10 rounded-full ${step === "email" ? "bg-purple-600" : "bg-gray-200"}`}></div>
                  <div className={`h-2 w-10 rounded-full ${step === "review" ? "bg-teal-600" : "bg-gray-200"}`}></div>
                </div>
                {step === "target" && (
                  <Button onClick={handleGenerateEmail} disabled={selectedBusinesses.length === 0}>
                    Next: Create Email
                  </Button>
                )}
                {step === "email" && (
                  <Button onClick={handleFinalizeCampaign}>Next: Review Campaign</Button>
                )}
                {step === "review" && (
                  <Button onClick={handleSendCampaign}>
                    <Send className="mr-2 h-4 w-4" /> Launch Campaign
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {step === "target" && (
            <div className="h-[calc(100vh-200px)] flex flex-col">
              {/* Search Bar */}
              <div className="p-4 border-b">
                <form onSubmit={handleSearch} className="flex gap-2 max-w-3xl mx-auto">
                  <Autocomplete
                    onLoad={setAutocomplete}
                    onPlaceChanged={() => {
                      if (autocomplete) setSearchTerm(autocomplete.getPlace().name || "");
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
                    <Search className="w-4 h-4 mr-2" /> Search
                  </Button>
                </form>
              </div>

              {/* Map and Business List */}
              <div className="flex-1 flex relative">
                {/* Business List (Left Sidebar) */}
                <div className="w-96 border-r overflow-y-auto">
                  {businesses.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">Search for businesses to see results</div>
                  ) : (
                    businesses.map((business) => (
                      <div
                        key={business.place_id}
                        className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                          selectedMarker?.place_id === business.place_id ? "bg-gray-50" : ""
                        }`}
                        onClick={() => handleMarkerClick(business)}
                      >
                        <h3 className="font-medium">{business.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>{business.details?.rating && formatRating(business.details.rating)}</span>
                          <span>{business.details?.price_level && getPriceLevel(business.details.price_level)}</span>
                        </div>
                        <p className="text-sm text-gray-500">{business.formatted_address}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleBusinessSelection(business)}
                          className="mt-2"
                        >
                          {selectedBusinesses.some((b) => b.place_id === business.place_id) ||
                          businessesWithoutEmail.some((b) => b.place_id === business.place_id)
                            ? "Deselect"
                            : "Select"}
                        </Button>
                      </div>
                    ))
                  )}
                </div>

                {/* Map (Center) */}
                <div className="flex-1 h-full">
                  <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={14} onLoad={setMap}>
                    {businesses.map((business) => (
                      <Marker
                        key={business.place_id}
                        position={{
                          lat: business.geometry?.location?.lat() ?? defaultCenter.lat,
                          lng: business.geometry?.location?.lng() ?? defaultCenter.lng,
                        }}
                        onClick={() => handleMarkerClick(business)}
                      />
                    ))}
                    {selectedMarker && (
                      <InfoWindow
                        position={{
                          lat: selectedMarker.geometry?.location?.lat() ?? defaultCenter.lat,
                          lng: selectedMarker.geometry?.location?.lng() ?? defaultCenter.lng,
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                      >
                        <div>
                          <h3 className="font-bold">{selectedMarker.name}</h3>
                          <p>{selectedMarker.formatted_address}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleBusinessSelection(selectedMarker)}
                          >
                            {selectedBusinesses.some((b) => b.place_id === selectedMarker.place_id) ||
                            businessesWithoutEmail.some((b) => b.place_id === selectedMarker.place_id)
                              ? "Deselect"
                              : "Select"}
                          </Button>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </div>

                {/* Selected Businesses and Businesses Without Email (Right Sidebar) */}
                <div className="w-80 border-l flex flex-col">
                  {/* Selected Businesses */}
                  <div className="flex-1 flex flex-col">
                    <div className="p-4 border-b">
                      <h2 className="font-bold">Selected Businesses</h2>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                      {selectedBusinesses.map((business) => (
                        <div key={business.place_id} className="mb-4 p-3 border rounded-lg relative group">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                            onClick={() => toggleBusinessSelection(business)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                          <div onClick={() => handleMarkerClick(business)} className="cursor-pointer">
                            <p className="font-medium">{business.name}</p>
                            <p className="text-sm text-gray-500">{business.email || "Email found"}</p>
                            <p className="text-sm text-gray-500">{business.formatted_address}</p>
                          </div>
                        </div>
                      ))}
                      {selectedBusinesses.length === 0 && (
                        <p className="text-gray-500 text-sm">No businesses with emails selected yet</p>
                      )}
                    </div>
                  </div>

                  {/* Businesses Without Email */}
                  <div className="flex-1 flex flex-col">
                    <div className="p-4 border-t">
                      <h2 className="font-bold text-red-600">Businesses Without Email</h2>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                      {businessesWithoutEmail.map((business) => (
                        <div key={business.place_id} className="mb-4 p-3 border rounded-lg relative group bg-red-50">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
                            onClick={() => toggleBusinessSelection(business)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                          <div onClick={() => handleMarkerClick(business)} className="cursor-pointer">
                            <p className="font-medium">{business.name}</p>
                            <p className="text-sm text-red-600">No email found</p>
                            <p className="text-sm text-gray-500">{business.formatted_address}</p>
                          </div>
                        </div>
                      ))}
                      {businessesWithoutEmail.length === 0 && (
                        <p className="text-gray-500 text-sm">No businesses without emails</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Creation Step */}
          {step === "email" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-600" /> Email Template
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="Introduction to our innovative services"
                      />
                    </div>
                    <div>
                      <label htmlFor="emailBody" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Body
                      </label>
                      <Textarea
                        id="emailBody"
                        className="min-h-[300px]"
                        defaultValue={`Hello {{Company}},

I noticed that your business in {{City}} has been making strides in its industry. Our services at Emaila can help companies like yours improve outreach and customer acquisition.

Would you be open to a quick call next week?

Best,
[Your Name]
Emaila`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-blue-600" /> Campaign Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Target Audience</h3>
                    <div className="text-sm text-gray-500 mb-2">{selectedBusinesses.length} businesses with emails</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedBusinesses.slice(0, 3).map((business) => (
                        <div key={business.place_id} className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-800">
                          {business.name}
                        </div>
                      ))}
                      {selectedBusinesses.length > 3 && (
                        <Sheet>
                          <SheetTrigger asChild>
                            <div className="px-3 py-1 bg-gray-100 rounded-full text-sm cursor-pointer">
                              +{selectedBusinesses.length - 3} more
                            </div>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Selected Businesses</SheetTitle>
                            </SheetHeader>
                            <div className="py-4">
                              {selectedBusinesses.map((business) => (
                                <div key={business.place_id} className="p-2 hover:bg-gray-50 rounded">
                                  {business.name} - {business.email}
                                </div>
                              ))}
                            </div>
                          </SheetContent>
                        </Sheet>
                      )}
                    </div>
                    {businessesWithoutEmail.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm text-red-600">
                          {businessesWithoutEmail.length} businesses won’t be emailed due to missing emails
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Review Step */}
          {step === "review" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-purple-600" /> Email Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-2 border-b">
                      <div className="font-medium">Subject: Introduction to our innovative services</div>
                      <div className="text-sm text-gray-500">To: {selectedBusinesses.length} recipients</div>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="mb-4">Hello [Company Name],</p>
                      <p className="mb-4">
                        I noticed that your business in [City] has been making strides in its industry. Our services at
                        Emaila can help companies like yours improve outreach and customer acquisition.
                      </p>
                      <p className="mb-4">Would you be open to a quick call next week?</p>
                      <p className="mb-4">Best,</p>
                      <p>[Your Name]<br />Emaila</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-600" /> Campaign Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Audience</h3>
                      <div className="flex items-center justify-between">
                        <span>Total Recipients:</span>
                        <span className="font-medium">{selectedBusinesses.length} businesses</span>
                      </div>
                      {businessesWithoutEmail.length > 0 && (
                        <div className="mt-2 text-sm text-red-600">
                          {businessesWithoutEmail.length} businesses excluded (no email found)
                        </div>
                      )}
                    </div>
                    <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                      <h3 className="font-medium text-teal-800">Ready to Launch</h3>
                      <p className="text-sm text-teal-600">
                        Your campaign will be sent to {selectedBusinesses.length} businesses.
                        {businessesWithoutEmail.length > 0 &&
                          ` ${businessesWithoutEmail.length} businesses will be excluded due to missing emails.`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </LoadScript>
  );
};

export default NewCampaign;