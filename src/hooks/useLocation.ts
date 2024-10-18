import { useState } from "react";

interface Stage {
  stage_name: string;
}

interface Ward {
  ward_name: string;
  stages: string[];
}

interface SubCounty {
  subcounty_name: string;
  wards: Ward[];
}

interface County {
  county_code: number;
  county_name: string;
  sub_counties: SubCounty[];
}

export const useLocation = (counties: County[]) => {
  const [selectedCounty, setSelectedCounty] = useState<County | null>(null);
  const [selectedSubCounty, setSelectedSubCounty] = useState<SubCounty | null>(
    null
  );
  const [selectedWard, setSelectedWard] = useState<Ward | null>(null);

  const handleCountyChange = (countyName: string) => {
    const county = counties.find((c) => c.county_name === countyName) || null;
    setSelectedCounty(county);
    setSelectedSubCounty(null); // Reset subcounty and wards when county changes
    setSelectedWard(null);
  };

  const handleSubCountyChange = (subCountyName: string) => {
    const subCounty =
      selectedCounty?.sub_counties.find(
        (sc) => sc.subcounty_name === subCountyName
      ) || null;
    setSelectedSubCounty(subCounty);
    setSelectedWard(null); // Reset wards and stages when subcounty changes
  };

  const handleWardChange = (wardName: string) => {
    const ward =
      selectedSubCounty?.wards.find((w) => w.ward_name === wardName) || null;
    setSelectedWard(ward);
  };

  return {
    selectedCounty,
    selectedSubCounty,
    selectedWard,
    handleCountyChange,
    handleSubCountyChange,
    handleWardChange,
  };
};
