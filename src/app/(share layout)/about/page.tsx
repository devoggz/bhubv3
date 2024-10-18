import React from "react";
import { Image } from "@nextui-org/react";

const AboutUS = () => {
  return (
    <div className="container p-6  space-y-4">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-6 text-center font-bold text-2xl text-white">
        About Us
        <p className="text-sm text-white font-normal">BodaHUb ni nini...</p>
      </div>

      <h4 className="text-lg font-semibold">
        BodaHub ndio app ya kipekee yenye information yote unayohitaji kujijenga
        kama mwanaboda - na inapatikana kwa urahisi kwenye simu yako
      </h4>
      <Image isZoomed src="/images/home.png" alt="about" />
      <p>
        Bodahub imeletwa kwako na kina nani - Sisi ni kampuni ya teknologia ya
        wakenya ambayo imetengeneza app ya BodaHub
      </p>
      <p>
        Kuingia app ya BodaHub kuna faida gani kwako kama mwanaboda - BodaHub
        inakuletea information mbali mbali kama:
      </p>
      <ul>
        <li>Mikopo ya kununua boda au mali ingine</li>
        <li>Habari za boda kutoka sehemu zote nchini</li>
        <li>Ujumbe kutoka wauzaji wa boda tofauti</li>
        <li>Njia rahisi ya kupata huduma kama insurance</li>
        <li>Vile unavyofaa kutunza boda yako</li>
        <li>Uuzaji was vifaa kama helmet au reflector</li>
        <li>Mawaidha ya wale wameeweza kufaulu Na mengine mengi.... </li>
      </ul>
      <p>
        Na tena, unavyoendelea kutumia app ya BodaHub, unaongeza uwezakano wako
        nafasi yako ya kujishindia boda au zawadi zingine zakovutia
      </p>
    </div>
  );
};

export default AboutUS;
