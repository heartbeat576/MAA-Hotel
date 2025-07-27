import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Germany",
    "Sweden",
    "London",
    "New York",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { 
  _id: 1, 
  title: "Tropical Paradise Deal", 
  description: "Stay 3 nights and get a sunset dinner cruise for free", 
  priceOff: 35, 
  expiryDate: "Aug 15", 
  image: exclusiveOfferCardImg1 
}, 
{ 
  _id: 2, 
  title: "Couple’s Dream Escape", 
  description: "Romantic stay with champagne and spa access included", 
  priceOff: 28, 
  expiryDate: "Sep 10", 
  image: exclusiveOfferCardImg2 
}, 
{ 
  _id: 3, 
  title: "Ultimate Luxury Experience", 
  description: "Book early and enjoy exclusive VIP amenities and discounts", 
  priceOff: 40, 
  expiryDate: "Sep 30", 
  image: exclusiveOfferCardImg3 
},

]

// Testimonials Dummy Data
export const testimonials = [
    { 
  id: 1, 
  name: "Isabella Martinez", 
  address: "Paris, France", 
  image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200", 
  rating: 5, 
  review: "MAA Hotels delivers an unmatched level of luxury and care. Every detail felt curated just for me – truly exceptional!" 
}, 
{ 
  id: 2, 
  name: "Ethan Carter", 
  address: "Sydney, Australia", 
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200", 
  rating: 4, 
  review: "From booking to check-out, MAA Hotels made the experience seamless. The properties exceeded all my expectations." 
}, 
{ 
  id: 3, 
  name: "Olivia Kim", 
  address: "Toronto, Canada", 
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", 
  rating: 5, 
  review: "Every stay with MAA Hotels feels like a VIP experience. Their luxury accommodations never fail to impress." 
}

];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
   { 
  icon: assets.homeIcon, 
  title: "Impeccable Comfort", 
  description: "Enjoy a spotless, well-maintained space designed for your ultimate comfort." 
}, 
{ 
  icon: assets.badgeIcon, 
  title: "Premium Clean Standards", 
  description: "This property adheres to MAA Hotels' rigorous hygiene and cleaning protocols." 
}, 
{ 
  icon: assets.locationFilledIcon, 
  title: "Prime Location", 
  description: "Rated 5 stars by 90% of guests for its unbeatable location and convenience." 
}, 
{ 
  icon: assets.heartIcon, 
  title: "Seamless Check-In", 
  description: "Guests consistently rate their check-in experience as flawless and stress-free." 
},
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "MAA Hotels",
    "email": "user.MAAHotels@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "__v": 1,
    "recentSearchedCities": [
        "Germany"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "3je23u9ru249r0u20",
    "name": "Maa Hotel",
    "address": "MG Road, XYZ Street",
    "contact": "+497874XXXXX",
    "owner": userDummyData,
    "city": "Germany",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "3r0293rj3902jr9j320",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 645,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "3289e923hf924930i2r9",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 673,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "2oi3jr0923rj0329fj3r2",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 354,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "203kf2kf203djiwij9339",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 215,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    "_id": "67f76839994a731e97d3b8ce",
    "user": userDummyData,
    "room": roomsDummyData[1],
    "hotel": hotelDummyData,
    "checkInDate": "2025-04-30T00:00:00.000Z",
    "checkOutDate": "2025-05-02T00:00:00.000Z",
    "totalPrice": 673,
    "guests": 2,
    "status": "confirmed",
    "paymentMethod": "Stripe",
    "isPaid": true,
    "createdAt": "2025-04-09T08:25:14.529Z",
    "updatedAt": "2025-04-10T10:12:35.520Z",
    "__v": 0
  },
  {
    "_id": "67f76829994a731e97d3b8c3",
    "user": userDummyData,
    "room": roomsDummyData[0],
    "hotel": hotelDummyData,
    "checkInDate": "2025-05-05T00:00:00.000Z",
    "checkOutDate": "2025-05-07T00:00:00.000Z",
    "totalPrice": 354,
    "guests": 3,
    "status": "pending",
    "paymentMethod": "PayPal",
    "isPaid": true,
    "createdAt": "2025-04-08T07:15:22.873Z",
    "updatedAt": "2025-04-08T07:20:11.873Z",
    "__v": 0
  },
  {
    "_id": "67f76810994a731e97d3b8b4",
    "user": userDummyData,
    "room": roomsDummyData[3],
    "hotel": hotelDummyData,
    "checkInDate": "2025-04-20T00:00:00.000Z",
    "checkOutDate": "2025-04-21T00:00:00.000Z",
    "totalPrice": 215,
    "guests": 1,
    "status": "cancelled",
    "paymentMethod": "Pay At Hotel",
    "isPaid": false,
    "createdAt": "2025-04-06T06:10:18.501Z",
    "updatedAt": "2025-04-07T06:14:55.501Z",
    "__v": 0
  }
]


// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 1242,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/