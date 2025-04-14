export interface Room {
    id: number;
    title: string;
    pricePerNight: number;
    pricePerWeek: number;
    pricePerMonth: number;
    location: string;
    lat: number;
    lng: number;
    images: string[];
    description: string;
    features: {
      pool: unknown;
      guests: number;
      wifi: number;
      airConditioning: number;
      beds: number;
      bedrooms?: number;
      bathrooms?: number;
      petFriendly: number;
    };
  }
  