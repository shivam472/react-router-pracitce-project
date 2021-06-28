import React from "react";

import QuoteItem from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Shivam", text: "Learning React is fun!" },
  { id: "q2", author: "Nayak", text: "This works!" },
];

const AllQuotes = () => {
  return <QuoteItem quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
