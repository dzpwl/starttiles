## About ##

This is a small project for a self-hosted startpage for displaying bookmarks and some other information as widget-style objects. The projected functionality is as a page which could be launched with a small webserver like `npx http-server $DIRECTORY_PATH` although I anticipate that I would convert this to a React project in the future.

Customization is anticipated as follows:

- Add and modify bookmarks
- Option to limit to a single page 
- Pre-configured or fully customized olorschemes
- Tiled or list style display
  + Tile layout: Modify order and size of tiles for bookmarks and widgets
  + List layout: Display widget info as pure text, single vs multi column 

For the different layouts, the intent is for the page to calculate an optimal size for each tile and list, and to limit the number of displayed entries if a single page layout is selected. In the case of limited entries, there would also be a choice of how the extras are handled, likely as a button-scrollable page or to expand/hide all entries, as well as the ability to set the priority of each link.

##Credits:##

####Inspiration####

[startup-page](https://timothypholmes.github.io/startup-page/)

####*Images*####

["Living Room - せたも" by u/Mz-\_-Blue](https://www.reddit.com/r/PixelArt/comments/x5kwef/living_room_せたも/?utm_source=share&utm_medium=web2x&context=3)
["Three Flamingos - 7 colors" by u/v78 ](https://www.reddit.com/r/PixelArt/comments/s239lg/oc_three_flamingos_7_colors/?utm_source=share&utm_medium=web2x&context=3)
Not sure who to credit the photo of Monte Alban to but I found it on a blog called [Find Out](https://founditok.blogspot.com/2021/07/monte-alban-mexico-ruins.html)

####*Code*####

[How to transform black into any given color using only CSS filters](https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991), using [MultiplyByZer0's solution](https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991) and his [relevant pen](https://codepen.io/sosuke/pen/Pjoqqp) for calculating values.
