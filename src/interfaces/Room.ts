export interface Room {
    videoUrl: any;
    arrivalExperience: any;
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
      hotTub: any;
      fireplace: any;
      gameRoom: any;
      kitchen: any;
      parking: any;
      tv: any;
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
  