# Notes

---

**Timing**

> I made my initial commit at 6:21p and final commit at 10:42p making it 4hr 20min total which included interruptions of ~20 mins.

- I used Vue with Tailwind and cloned the boilerplate from [https://github.com/or-abdillh/vue-tailwind](https://github.com/or-abdillh/vue-tailwind), some of the UI elements were started from templates at [Tailwind Elements](https://tailwind-elements.com/)

- I chose TailwindCSS for my styles so that I could commit as much time as possible to the logic.

- My intention was to break up the code in a way that would as closely match my style if I were to code it under normal conditions (i.e. create UI components and pass props through slots, separate logic and data and import via mixins, single purpose components etc)

- I initially started to use the Google Maps api to resolve the coordinates against the city name, but my api key started erroring so I used this api instead (API Ninjas)[https://api-ninjas.com/api]

- The finished app returns the city, temperature, and weather code description for the city name entered in the field, as well as pills to display the last 3 searched (favorites). My initial intention was to map images to the weathercodes object so that the pictures would depict the description, and have the favorites initiate a search on click. I also would have made different choices if the Google Maps api was available to me. 