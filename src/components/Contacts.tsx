import locationTag from "../images/location.svg";
import { apply } from "ol-mapbox-style";
import { stylefunction } from "ol-mapbox-style";
import { useEffect, useState } from "react";
import axios from "axios";

type ContactsProps = {
  name: string;
  address: string;
  phone: string;
  email: string;
  location: { lat: number; long: number };
};

export default function Contacts({
  name,
  address,
  phone,
  email,
  location,
}: ContactsProps) {
  const API_KEY = "764b520e04a14ebb92020395f16144d5";
  const latitude = String(location.lat);
  const longitude = String(location.long);

  const [loading, setLoading] = useState(true);

  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=dark-matter-brown&height=800&zoom=3&center=lonlat:${longitude},${latitude}&apiKey=${API_KEY}`;

  return (
    <section className="bg-darkBg rounded-[8px] h-[430px] max-w-[400px] xl:w-[402px] overflow-hidden">
      <div className="py-[30px] px-[60px] circle relative">
        <p className="relative z-50 text-[16px] leading-[20px] tracking-[0.24px] xl:boldText text-lightTextColor font-bold mb-[14px]">
          Department name.
          <br /> {name}
        </p>
        <img
          src={locationTag}
          className="relative z-50 mr-[8px] mb-[8px] inline"
          alt="location pointer"
        />
        <p className="relative z-50 inline text-lightTextColor text-[16px] leading-[23px] tracking-[-0.5px] xl:normalText">
          {address}
        </p>
        <address className="text-transparentWhiteText xl:text-[#E8EBF3] not-italic mt-[6px] xl:normalText">
          <a className="relative z-50 block" href="tel:+430140400-12090">
            {phone}
          </a>
          <a
            className="relative z-50 block"
            href="mailto:post_akh_diz@akhwien.at"
          >
            {email}
          </a>
        </address>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <img src={mapUrl} onLoad={() => setLoading(false)} alt="map" />
        {loading && <p className="normalText text-white p-[30px]">Map is loading...</p>}
      </div>
    </section>
  );
}
