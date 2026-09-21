export type Label = "preferred" | "not-vetted";

export type F11Result = {
  name: string;
  breadcrumb: string;
  description: string;
  label: Label;
};

export type AdvisorMessage = {
  author: string;
  channel: string;
  quote: string;
  translated?: boolean;
  isQuestion?: boolean;
};

export type Answer = {
  id: string;
  question: string;
  summary: string;
  f11: F11Result[];
  messages: AdvisorMessage[];
  checked: string;
  keywords: string[];
};

export const chapters = [
  { n: "01", time: "0:09", seconds: 9, title: "What you can ask" },
  { n: "02", time: "0:23", seconds: 23, title: "How to ask" },
  { n: "03", time: "0:39", seconds: 39, title: "What's on F11" },
  { n: "04", time: "0:53", seconds: 53, title: "The advisor channels" },
  { n: "05", time: "1:08", seconds: 68, title: "What the labels mean" },
];

export const answers: Answer[] = [
  {
    id: "westin",
    question: "Any feedback on the Westin Playa Conchal for a family?",
    summary:
      "Two advisors have stayed. It works for a family watching their budget, but it isn't a luxury hotel. One suggested the Andaz Papagayo instead, and flagged the catch: rooms take three, two adults and one child.",
    f11: [
      {
        name: "Westin Playa Conchal",
        breadcrumb: "F11 ▪ Partnerships › Hotels",
        description: "Partner page with rates, resort credits and the booking contact.",
        label: "preferred",
      },
      {
        name: "Andaz Papagayo",
        breadcrumb: "F11 ▪ Partnerships › Hotels",
        description: "Partner page with rates and room types, including occupancy limits.",
        label: "preferred",
      },
    ],
    messages: [
      {
        author: "An advisor",
        channel: "Global channel",
        quote: "Does anyone have feedback on the Westin Playa Conchal in Costa Rica?",
        isQuestion: true,
      },
      {
        author: "Jennifer",
        channel: "Global channel",
        quote: "Fine for a family watching their budget. Not a luxury hotel.",
      },
      {
        author: "Thelma",
        channel: "Global channel",
        quote:
          "They might go for the Andaz Papagayo instead. But the Andaz doesn't allow more than three in a room: two adults and one child.",
      },
    ],
    checked: "Checked: Hotels ▪ The Originals ▪ Enhanced Commission List ▪ Global, Mexico and Europe channels",
    keywords: ["westin", "conchal", "costa rica", "family", "andaz"],
  },
  {
    id: "argentina",
    question: "What do we have in Argentina?",
    summary:
      "Three partner pages on F11 cover Argentina: one DMC, one hotel group and one rep firm. Advisors have added notes on Buenos Aires arrivals and the Mendoza wine season.",
    f11: [
      {
        name: "Say Hueque",
        breadcrumb: "F11 ▪ Partnerships › DMCs",
        description: "DMC page for Argentina and Chile with itineraries and the sales contact.",
        label: "preferred",
      },
      {
        name: "Alvear Palace Hotel",
        breadcrumb: "F11 ▪ Partnerships › Hotels",
        description: "Buenos Aires partner page with rates and the amenity list.",
        label: "preferred",
      },
      {
        name: "Bodega tours, Mendoza",
        breadcrumb: "Advisor tip only",
        description: "Named in the channels. No F11 page and nobody at F1S has checked it.",
        label: "not-vetted",
      },
    ],
    messages: [
      {
        author: "Marisol",
        channel: "Mexico channel",
        quote:
          "For Buenos Aires, ask for the airport transfer to be confirmed in writing. Two of my clients waited an hour last month.",
        translated: true,
      },
      {
        author: "Peter",
        channel: "Global channel",
        quote:
          "Mendoza in March is harvest season. Book the bodega lunches before you book the hotel, they go first.",
      },
    ],
    checked: "Checked: DMCs ▪ Hotels ▪ Rep firms ▪ Global, Mexico and Europe channels",
    keywords: ["argentina", "buenos aires", "mendoza", "south america"],
  },
  {
    id: "japan",
    question: "Is anything new opening in Japan?",
    summary:
      "Two openings are on F11 with partner pages, and advisors have been comparing notes on the Kyoto opening since the site inspection in August.",
    f11: [
      {
        name: "Janu Tokyo",
        breadcrumb: "F11 ▪ Partnerships › Hotels",
        description: "Partner page with opening rates and the preferred amenity.",
        label: "preferred",
      },
      {
        name: "Roku Kyoto",
        breadcrumb: "F11 ▪ Partnerships › Hotels",
        description: "Partner page with rates, spa credit and the booking contact.",
        label: "preferred",
      },
    ],
    messages: [
      {
        author: "Alice",
        channel: "Europe channel",
        quote:
          "Just back from the Janu Tokyo inspection. The rooms are smaller than the photos suggest, but the gym and pool are the best in the city.",
      },
      {
        author: "An advisor",
        channel: "Global channel",
        quote: "Anyone placed clients at Roku Kyoto yet? Wondering if the shuttle is enough or we need a car.",
        isQuestion: true,
      },
    ],
    checked: "Checked: Hotels ▪ The Originals ▪ Webinars ▪ Global, Mexico and Europe channels",
    keywords: ["japan", "tokyo", "kyoto", "new", "opening"],
  },
  {
    id: "week",
    question: "What should I know this week?",
    summary:
      "Two webinars are on F11 this week, one enhanced commission offer changes on Friday, and the channels have been busy with the Mexico roadshow.",
    f11: [
      {
        name: "Enhanced commission: Caribbean, ends Friday",
        breadcrumb: "F11 ▪ Partnerships › Enhanced Commission List",
        description: "An extra 3% on seven resorts, on bookings made before Friday.",
        label: "preferred",
      },
      {
        name: "Webinar: The Originals in Europe",
        breadcrumb: "F11 ▪ Partnerships › Webinars",
        description: "Thursday, 11am ET. Replay posted the following day.",
        label: "preferred",
      },
    ],
    messages: [
      {
        author: "Gina",
        channel: "Global channel",
        quote:
          "Reminder that the Mexico roadshow dates are confirmed. If you want a supplier meeting, put your name down this week.",
      },
      {
        author: "Javier",
        channel: "Mexico channel",
        quote: "The Caribbean commission offer is worth checking before you finalise any February bookings.",
        translated: true,
      },
    ],
    checked: "Checked: Enhanced Commission List ▪ Webinars ▪ Global, Mexico and Europe channels",
    keywords: ["this week", "week", "news", "now", "happening"],
  },
  {
    id: "virgin",
    question: "Do we have a deal with Virgin Hotels?",
    summary:
      "Yes. Virgin Hotels has a partner page on F11 and sits on the enhanced commission list. One advisor has flagged that the New York property is the exception.",
    f11: [
      {
        name: "Virgin Hotels",
        breadcrumb: "F11 ▪ Partnerships › Hotels",
        description: "Partner page with the commission terms, amenity and booking instructions.",
        label: "preferred",
      },
      {
        name: "Virgin Hotels on the Enhanced Commission List",
        breadcrumb: "F11 ▪ Partnerships › Enhanced Commission List",
        description: "An extra 4% on qualifying stays, booked through the partner page.",
        label: "preferred",
      },
    ],
    messages: [
      {
        author: "Thelma",
        channel: "Global channel",
        quote:
          "Virgin New York is not on the same terms as the rest. Check the partner page before you quote the commission.",
      },
    ],
    checked: "Checked: Hotels ▪ Enhanced Commission List ▪ Global, Mexico and Europe channels",
    keywords: ["virgin", "deal", "commission"],
  },
  {
    id: "accor",
    question: "Who's our contact at Accor for the Mexico roadshow?",
    summary:
      "The Accor contact is on the F11 contact database, and the roadshow brief names who to email first. Two advisors have added what worked for them last year.",
    f11: [
      {
        name: "Accor — luxury brands, Americas",
        breadcrumb: "F11 ▪ Partnerships › Contact Database",
        description: "Named contact, direct email and the brands they cover.",
        label: "preferred",
      },
      {
        name: "Mexico roadshow brief",
        breadcrumb: "F11 ▪ Partnerships › Rep firms",
        description: "Dates, cities and the supplier meeting request form.",
        label: "preferred",
      },
    ],
    messages: [
      {
        author: "Marisol",
        channel: "Mexico channel",
        quote:
          "Email the roadshow coordinator, not the brand contact. She sets the meeting order and answers the same day.",
        translated: true,
      },
      {
        author: "Peter",
        channel: "Global channel",
        quote: "Last year the Accor meetings filled in two days. Ask for a slot as soon as the dates are out.",
      },
    ],
    checked: "Checked: Contact Database ▪ Rep firms ▪ Global, Mexico and Europe channels",
    keywords: ["accor", "contact", "roadshow", "mexico", "who do i call"],
  },
];

export function findAnswer(query: string): Answer | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const direct = answers.find((a) => a.question.toLowerCase() === q);
  if (direct) return direct;
  return (
    answers.find((a) => a.keywords.some((k) => q.includes(k))) ??
    answers.find((a) => a.question.toLowerCase().includes(q)) ??
    null
  );
}
