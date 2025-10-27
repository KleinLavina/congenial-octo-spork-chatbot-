export interface SuggestedReply {
  text: string;
  category: string;
  isExploreMore?: boolean;
  isBackToMain?: boolean;
  isSpecificFollowup?: boolean;
}

export const contextBasedSuggestions: Record<string, SuggestedReply[]> = {
  // Main/General responses - simplified to avoid circular references
  general: [
    { text: "View all products", category: "products_overview" },
    { text: "Pricing information", category: "pricing_info" },
    { text: "How to order", category: "ordering_process" },
    { text: "Payment methods", category: "payment_methods" },
    { text: "Contact information", category: "contact_info" },
    { text: "About our store", category: "about_store" },
  ],

  // Greetings responses
  greetings: [
    { text: "Browse products", category: "products_overview" },
    { text: "How to order", category: "ordering_process" },
    { text: "Payment options", category: "payment_methods" },
    { text: "Check availability", category: "availability" },
    { text: "Custom orders", category: "custom_orders" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Products overview
  products_overview: [
    { text: "Caps & Headwear", category: "caps" },
    { text: "Bags & Totes", category: "bags" },
    { text: "T-shirts", category: "apparel" },
    { text: "Accessories", category: "accessories" },
    { text: "Custom merchandise", category: "custom_orders" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Product categories
  caps: [
    { text: "Basic caps", category: "basic_caps" },
    { text: "Acid wash caps", category: "acid_wash_caps" },
    { text: "Check prices", category: "pricing_info" },
    { text: "Check availability", category: "availability" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  bags: [
    { text: "Small tote bags", category: "small_tote" },
    { text: "Large tote bags", category: "large_tote" },
    { text: "Check prices", category: "pricing_info" },
    { text: "Check availability", category: "availability" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  apparel: [
    { text: "T-shirt details", category: "tshirts" },
    { text: "Size guide", category: "sizing" },
    { text: "Check prices", category: "pricing_info" },
    { text: "Check availability", category: "availability" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Pricing information
  pricing_info: [
    { text: "Cap prices", category: "cap_prices" },
    { text: "Bag prices", category: "bag_prices" },
    { text: "T-shirt prices", category: "tshirt_prices" },
    { text: "Custom order pricing", category: "custom_pricing" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Availability
  availability: [
    { text: "Check cap stock", category: "cap_stock" },
    { text: "Check bag stock", category: "bag_stock" },
    { text: "Check shirt stock", category: "shirt_stock" },
    { text: "Restock information", category: "restock_info" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Payment methods
  payment_methods: [
    { text: "GCash payment", category: "gcash" },
    { text: "Payment steps", category: "payment_steps" },
    { text: "Account details", category: "account_info" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Ordering process
  ordering_process: [
    { text: "Step-by-step guide", category: "order_steps" },
    { text: "Place order", category: "place_order" },
    { text: "Pickup options", category: "pickup_options" },
    { text: "Delivery information", category: "delivery_info" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Custom orders
  custom_orders: [
    { text: "Custom t-shirts", category: "custom_tshirts" },
    { text: "Group orders", category: "group_orders" },
    { text: "Design process", category: "design_process" },
    { text: "Pricing", category: "custom_pricing" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Contact information
  contact_info: [
    { text: "Phone number", category: "phone" },
    { text: "Facebook page", category: "facebook" },
    { text: "Office location", category: "location" },
    { text: "Business hours", category: "hours" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // About store
  about_store: [
    { text: "Our story", category: "story" },
    { text: "Mission", category: "mission" },
    { text: "Location", category: "location" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],

  // Thank you responses
  thanks: [
    { text: "Browse products", category: "products_overview" },
    { text: "How to order", category: "ordering_process" },
    { text: "Contact us", category: "contact_info" },
    { text: "Explore all topics", category: "general", isExploreMore: true },
  ],
};

// Helper function to get suggestions with fallback
export const getContextSuggestions = (context: string): SuggestedReply[] => {
  return contextBasedSuggestions[context] || contextBasedSuggestions.general;
};

// Function to get explore more suggestions from any context
export const getExploreMoreSuggestions = (): SuggestedReply[] => {
  return [
    { text: "View all products", category: "products_overview" },
    { text: "Pricing information", category: "pricing_info" },
    { text: "How to order", category: "ordering_process" },
    { text: "Payment methods", category: "payment_methods" },
    { text: "Contact information", category: "contact_info" },
    { text: "About our store", category: "about_store" },
  ];
};
