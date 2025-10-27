// chatService.ts - Tatak Josephinian - Official SJC Merchandise Store
import {
  GREETING_RESPONSE,
  HOW_ARE_YOU_RESPONSE,
  ABOUT_SJC_RESPONSE,
  ABOUT_TATAK_RESPONSE,
  PRODUCTS_RESPONSE,
  PRICING_RESPONSE,
  AVAILABILITY_RESPONSE,
  STORE_RESPONSE,
  PAYMENT_RESPONSE,
  CONTACT_RESPONSE,
  CUSTOM_ORDERS_RESPONSE,
  ORDER_PROCESS_RESPONSE,
  GCASH_DETAILS_RESPONSE,
  THANKS_RESPONSE,
  DEFAULT_RESPONSE,
  NEW_ARRIVALS_RESPONSE,
  SIZING_RESPONSE,
} from "./chatListResponse";

// Import both the type and the actual suggestion data
import {
  type SuggestedReply,
  contextBasedSuggestions,
  getContextSuggestions,
} from "./suggestedReplies";

// Direct access shortcuts - UPDATED to match EXACT categories from your file
const greetingReplies = contextBasedSuggestions.greetings;
const generalReplies = contextBasedSuggestions.general;
const productsReplies = contextBasedSuggestions.products_overview;
const pricingReplies = contextBasedSuggestions.pricing_info;
const availabilityReplies = contextBasedSuggestions.availability;
const paymentReplies = contextBasedSuggestions.payment_methods;
const contactReplies = contextBasedSuggestions.contact_info;
const customOrdersReplies = contextBasedSuggestions.custom_orders;
const orderingReplies = contextBasedSuggestions.ordering_process;
const aboutStoreReplies = contextBasedSuggestions.about_store;
const thanksReplies = contextBasedSuggestions.thanks;

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface KeywordGroup {
  keywords: string[];
  priority: number;
  response: string;
  suggestions: SuggestedReply[];
}

export interface ChatResponse {
  message: string;
  suggestions: SuggestedReply[];
}

function calculateMatchScore(input: string, keywords: string[]): number {
  let score = 0;

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    if (regex.test(input)) {
      const wordCount = keyword.split(" ").length;
      score += wordCount * 2;
      if (input.includes(keyword.toLowerCase())) {
        score += 3;
      }
    }
  });

  return score;
}

export function getMerchandiseResponse(userInput: string): ChatResponse {
  const input = userInput
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();

  const keywordGroups: KeywordGroup[] = [
    {
      keywords: [
        "gcash",
        "payment",
        "pay",
        "paying",
        "send money",
        "account number",
        "account details",
      ],
      priority: 10,
      response: GCASH_DETAILS_RESPONSE,
      suggestions: paymentReplies,
    },
    {
      keywords: [
        "custom",
        "customized",
        "personalized",
        "design",
        "designs",
        "group order",
        "batch order",
        "organization",
      ],
      priority: 10,
      response: CUSTOM_ORDERS_RESPONSE,
      suggestions: customOrdersReplies,
    },
    {
      keywords: [
        "order",
        "ordering",
        "how to order",
        "how to buy",
        "purchase",
        "buy",
        "get",
        "process",
        "steps",
      ],
      priority: 9,
      response: ORDER_PROCESS_RESPONSE,
      suggestions: orderingReplies,
    },
    {
      keywords: [
        "price",
        "pricing",
        "prices",
        "cost",
        "costs",
        "how much",
        "amount",
        "fee",
        "fees",
      ],
      priority: 9,
      response: PRICING_RESPONSE,
      suggestions: pricingReplies,
    },
    {
      keywords: [
        "available",
        "availability",
        "stock",
        "stocks",
        "in stock",
        "out of stock",
        "sold out",
        "have",
        "left",
      ],
      priority: 9,
      response: AVAILABILITY_RESPONSE,
      suggestions: availabilityReplies,
    },
    {
      keywords: [
        "product",
        "products",
        "item",
        "items",
        "merch",
        "merchandise",
        "cap",
        "caps",
        "hat",
        "hats",
        "shirt",
        "shirts",
        "t-shirt",
        "t-shirts",
        "bag",
        "bags",
        "tote",
        "umbrella",
        "umbrellas",
      ],
      priority: 8,
      response: PRODUCTS_RESPONSE,
      suggestions: productsReplies,
    },
    {
      keywords: [
        "new",
        "new arrival",
        "new arrivals",
        "latest",
        "recent",
        "featured",
        "coming soon",
      ],
      priority: 8,
      response: NEW_ARRIVALS_RESPONSE,
      suggestions: productsReplies, // Using products_replies since new_arrivals doesn't exist
    },
    {
      keywords: [
        "size",
        "sizes",
        "sizing",
        "measurement",
        "measurements",
        "fit",
        "fits",
        "small",
        "medium",
        "large",
        "xl",
      ],
      priority: 8,
      response: SIZING_RESPONSE,
      suggestions: getContextSuggestions("apparel"), // Use apparel category for sizing
    },
    {
      keywords: [
        "store",
        "location",
        "locations",
        "where",
        "place",
        "physical store",
        "office",
        "pick up",
        "pickup",
      ],
      priority: 7,
      response: STORE_RESPONSE,
      suggestions: contactReplies, // Use contact_replies for store location
    },
    {
      keywords: [
        "contact",
        "contacts",
        "phone",
        "phones",
        "number",
        "numbers",
        "email",
        "emails",
        "address",
        "addresses",
        "reach",
        "message",
        "facebook",
        "fb",
        "page",
      ],
      priority: 7,
      response: CONTACT_RESPONSE,
      suggestions: contactReplies,
    },
    {
      keywords: [
        "about sjc",
        "st joseph college",
        "sjc history",
        "sjc background",
        "sjc mission",
        "sjc vision",
      ],
      priority: 6,
      response: ABOUT_SJC_RESPONSE,
      suggestions: aboutStoreReplies,
    },
    {
      keywords: [
        "about tatak",
        "tatak josephinian",
        "who are you",
        "what is tatak",
        "official store",
        "bsba department",
        "established",
      ],
      priority: 6,
      response: ABOUT_TATAK_RESPONSE,
      suggestions: aboutStoreReplies,
    },
    {
      keywords: [
        "payment method",
        "payment options",
        "how to pay",
        "payments",
        "gcash only",
        "online payment",
      ],
      priority: 6,
      response: PAYMENT_RESPONSE,
      suggestions: paymentReplies,
    },
    {
      keywords: [
        "thank",
        "thanks",
        "thank you",
        "appreciate",
        "appreciation",
        "grateful",
      ],
      priority: 3,
      response: THANKS_RESPONSE,
      suggestions: thanksReplies,
    },
    {
      keywords: [
        "hello",
        "hi",
        "hey",
        "greetings",
        "good morning",
        "good afternoon",
        "good evening",
        "start",
        "begin",
      ],
      priority: 2,
      response: GREETING_RESPONSE,
      suggestions: greetingReplies,
    },
    {
      keywords: ["whats up", "how are you", "howdy", "how are things"],
      priority: 1,
      response: HOW_ARE_YOU_RESPONSE,
      suggestions: generalReplies,
    },
  ];

  if (!input) {
    return {
      message: DEFAULT_RESPONSE,
      suggestions: generalReplies,
    };
  }

  let bestMatch: KeywordGroup | null = null;
  let highestScore = 0;

  for (const group of keywordGroups) {
    const score = calculateMatchScore(input, group.keywords);
    if (score > 0) {
      const weightedScore = score * group.priority;
      if (weightedScore > highestScore) {
        highestScore = weightedScore;
        bestMatch = group;
      }
    }
  }

  if (bestMatch && highestScore >= 5) {
    return {
      message: bestMatch.response,
      suggestions: bestMatch.suggestions,
    };
  }

  return {
    message: DEFAULT_RESPONSE,
    suggestions: generalReplies,
  };
}
