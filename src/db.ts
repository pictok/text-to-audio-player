const tracks: Track[] = [
  {
    id: 1,
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-100509/zapsplat_nature_waterfall_water_trickling_through_rocks_leading_to_main_falls_sc_qld_australia_104374.mp3",
    description:
      "nature waterfall water trickling through rocks leading to main fall",
    tags: ["nature", "waterfall", "water", "trickling"],
  },
  {
    id: 2,
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-100509/zapsplat_nature_rain_medium_heavy_then_decreases_occ_drips_forest_104361.mp3",
    description:
      "Medium heavy rain in forest, then decreases, occasional drips",
    tags: ["heavy rain", "forest", "drips"],
  },
  {
    id: 3,
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-69838/zapsplat_nature_ocean_surf_50m_away_recorded_in_wooded_area_birds_winter_australia_70688.mp3",
    description: "Ocean waves, surf, 50 meters distance, birds in trees",
    tags: ["Ocean", "surf", "birds", "trees", "waves"],
  },
  {
    id: 4,
    url: "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-sound-spark/sound_spark_Flatwoods_Scrub_Rock_Springs_Nature_Forest_Close_Birds_Loop_01.mp3",
    description:
      "Forest, Nature, Woods, Trees, Bird, Chirp, Chirping, Squeak, Squawk",
    tags: ["Forest", "Jungle", "birds"],
  },
];

export type Track = {
  id: number;
  url: string;
  description: string;
  tags: string[];
};

export function getTracks(): Track[] {
  return tracks;
}

export function getTrack(id: number): Track | undefined {
  return tracks.find((track) => track.id === id);
}

export function searchTrack(search: string): Track[] {
  if (!search) {
    return [];
  } else {
    return tracks.filter((track) =>
      track.description.toLowerCase().includes(search.toLowerCase())
    );
  }
}
