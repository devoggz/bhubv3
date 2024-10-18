"use client";
import { useLocation } from "@/hooks/useLocation";

const CountyForm = () => {
  const countiesData = [
    {
      county_code: 1,
      county_name: "Mombasa",
      sub_counties: [
        {
          subcounty_name: "Changamwe",
          wards: [
            { ward_name: "Port Reitz", stages: ["Stage 1", "Stage 2"] },
            { ward_name: "Kipevu", stages: ["Stage 3", "Stage 4"] },
            { ward_name: "Airport", stages: ["Stage 5", "Stage 6"] },
            { ward_name: "Miritini", stages: ["Stage 7", "Stage 8"] },
            { ward_name: "Chaani", stages: ["Stage 9", "Stage 10"] },
          ],
        },
        {
          subcounty_name: "Jomvu",
          wards: [
            { ward_name: "Mikindani", stages: ["Stage 11", "Stage 12"] },
            { ward_name: "Jomvu Kuu", stages: ["Stage 13", "Stage 14"] },
            { ward_name: "Jomvu Mikanjuni", stages: ["Stage 15", "Stage 16"] },
          ],
        },
      ],
    },
    {
      county_code: 2,
      county_name: "Kwale",
      sub_counties: [
        {
          subcounty_name: "Matuga",
          wards: [
            { ward_name: "Tiwi", stages: ["Stage 17", "Stage 18"] },
            { ward_name: "Kombani", stages: ["Stage 19", "Stage 20"] },
            { ward_name: "Kwale Town", stages: ["Stage 21", "Stage 22"] },
          ],
        },
        {
          subcounty_name: "Msambweni",
          wards: [
            { ward_name: "Ukunda", stages: ["Stage 23", "Stage 24"] },
            { ward_name: "Kinondo", stages: ["Stage 25", "Stage 26"] },
            { ward_name: "Vanga", stages: ["Stage 27", "Stage 28"] },
          ],
        },
      ],
    },
  ];

  const {
    selectedCounty,
    selectedSubCounty,
    selectedWard,
    handleCountyChange,
    handleSubCountyChange,
    handleWardChange,
  } = useLocation(countiesData);

  return (
    <form>
      {/* County Select */}
      <select onChange={(e) => handleCountyChange(e.target.value)}>
        <option value="">Select County</option>
        {countiesData.map((county) => (
          <option key={county.county_code} value={county.county_name}>
            {county.county_name}
          </option>
        ))}
      </select>

      {/* SubCounty Select */}
      <select
        onChange={(e) => handleSubCountyChange(e.target.value)}
        disabled={!selectedCounty}
      >
        <option value="">Select SubCounty</option>
        {selectedCounty?.sub_counties.map((subCounty) => (
          <option
            key={subCounty.subcounty_name}
            value={subCounty.subcounty_name}
          >
            {subCounty.subcounty_name}
          </option>
        ))}
      </select>

      {/* Ward Select */}
      <select
        onChange={(e) => handleWardChange(e.target.value)}
        disabled={!selectedSubCounty}
      >
        <option value="">Select Ward</option>
        {selectedSubCounty?.wards.map((ward) => (
          <option key={ward.ward_name} value={ward.ward_name}>
            {ward.ward_name}
          </option>
        ))}
      </select>

      {/* Stage Select */}
      <select disabled={!selectedWard}>
        <option value="">Select Stage</option>
        {selectedWard?.stages.map((stage) => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CountyForm;
