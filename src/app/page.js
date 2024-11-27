"use client";
import { useState } from "react";
import "./cardStyle.css";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function MyApp() {
  const info = [
    {
      id: 1,
      firstName: "Marian",
      lastName: "Dixsee",
      email: "mdixsee0@nba.com",
      companyName: "Blogtags",
      phoneNumber: "412-530-2249",
      address: "62 Meadow Ridge Plaza",
    },
    {
      id: 2,
      firstName: "Coleman",
      lastName: "Oxbie",
      email: "coxbie1@oaic.gov.au",
      companyName: "Fatz",
      phoneNumber: "592-295-2012",
      address: "18 Macpherson Place",
    },
    {
      id: 3,
      firstName: "Allx",
      lastName: "Tomasian",
      email: "atomasian2@cafepress.com",
      companyName: "Abata",
      phoneNumber: "741-828-1962",
      address: "42040 Ridgeway Trail",
    },
    {
      id: 4,
      firstName: "Jarrett",
      lastName: "Randales",
      email: "jrandales3@wiley.com",
      companyName: "Vidoo",
      phoneNumber: "401-321-9934",
      address: "595 Lakewood Street",
    },
    {
      id: 5,
      firstName: "Mora",
      lastName: "Tildesley",
      email: "mtildesley4@privacy.gov.au",
      companyName: "Shuffletag",
      phoneNumber: "254-913-7925",
      address: "7 Little Fleur Point",
    },
    {
      id: 6,
      firstName: "Livvyy",
      lastName: "Crankhorn",
      email: "lcrankhorn5@google.com.br",
      companyName: "Fivespan",
      phoneNumber: "589-951-2909",
      address: "23524 Thackeray Street",
    },
    {
      id: 7,
      firstName: "Erwin",
      lastName: "LLelweln",
      email: "ellelweln6@de.vu",
      companyName: "Cogibox",
      phoneNumber: "105-760-3548",
      address: "20 Cardinal Pass",
    },
    {
      id: 8,
      firstName: "Jourdain",
      lastName: "Leban",
      email: "jleban7@is.gd",
      companyName: "Layo",
      phoneNumber: "124-860-5889",
      address: "77 Fair Oaks Court",
    },
    {
      id: 9,
      firstName: "Christy",
      lastName: "Van Der Straaten",
      email: "cvanderstraaten8@dailymail.co.uk",
      companyName: "Linktype",
      phoneNumber: "460-169-0338",
      address: "94749 Mendota Circle",
    },
    {
      id: 10,
      firstName: "Jehanna",
      lastName: "Cleobury",
      email: "jcleobury9@huffingtonpost.com",
      companyName: "Flashpoint",
      phoneNumber: "396-811-4137",
      address: "3759 Oak Valley Park",
    },
  ];

  const cards = info.map((person) => (
    <Card
      key={person.id}
      firstName={person.firstName}
      lastName={person.lastName}
      email={person.email}
      companyName={person.companyName}
      phoneNumber={person.phoneNumber}
      address={person.address}
    />
  ));

  return <div className="card-container">{cards}</div>;
}

function Card({
  firstName,
  lastName,
  email,
  companyName,
  phoneNumber,
  address,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="name">
          {firstName} <span className="last-name">{lastName}</span>
        </div>
        <div className="company-name">{companyName}</div>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <FiPhone /> {phoneNumber}
        </div>
        <div className="contact-item">
          <FiMail /> {email}
        </div>
        <div className="contact-item">
          <GrLocation /> {address}
        </div>
      </div>

      <div className="qr-code">{/* QR code can be added here */}</div>
    </div>
  );
}
