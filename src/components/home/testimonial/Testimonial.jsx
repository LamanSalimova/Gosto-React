import React from "react";
import Heading from "../../common/Heading";
import { customer } from "../../../utils/data";
import { ImQuotesRight } from "react-icons/im";

export default function Testimonial() {
  return (
    <section className="customer">
      <Heading
        title="Choose The Plans"
        desc="Meet our newbies! The latest templates uploaded to the marketplace."
      />

      <div className="content">
        {customer.map((items) => (
          <div className="card" key={items.id}>
            <button>
              <ImQuotesRight />
            </button>
            <p> "{items.desc}"</p>
            <h3>{items.name}</h3>
            <span>{items.post}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
