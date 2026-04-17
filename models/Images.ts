import { z } from "zod"

const BasicImageSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_result: z.number(),
})

const PhotosSchema = z.object({
    
})

{
  "page": 1,
  "per_page": 1,
  "next_page": "https://api.pexels.com/v1/curated/?page=2&per_page=1"
}

  "photos": [
    {
        "id": 2880507,
      "width": 4000,
      "height": 6000,
      "url": "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
      "photographer": "Deden Dicky Ramdhani",
      "photographer_url": "https://www.pexels.com/@drdeden88",
      "photographer_id": 1378810,
      "avg_color": "#7E7F7B",
      "src": {
        "large": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      "liked": false,
      "alt": "Brown Rocks During Golden Hour"
    }
  ],