import React from "react";
import { useHistory } from "react-router";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    history.push("/quotes");
    console.log(quoteData);
  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
