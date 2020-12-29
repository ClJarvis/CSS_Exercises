On Christmas Eve the last door of the LEGO Advent Calendar was opened. It's Darth Vader in a Death Star ugly sweater. 

The sweater is red with white desgins. I used a couple shades of red, white, and cornsilk, all the red and white was too jarring.

I've done a few of these now and have a bit of a template. The featured character  goes in the center of the sweater in Character div. The Death Star is only 3 divs.  
```HTML
       <div class="character">
         <div class="deathStar">       
            <div class="outer_dish"></div>
            <div class="trench"></div>
          </div>            
       </div>
```

The character div is for positioning the featured charcter in this case the Death Star.  The Death Star is a black square. I applied `border-radiis: 50%` to make it a circle. The dashed border gives the edge of the circle an 8-bit look. this workes becasue the border color matches the sweater background color. see the image where the border id green you see the border and looses the effect of 8 bit.

```CSS
.character {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; 
    overflow: visible;
}


.deathStar {
    background-color: #000000;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 2px dashed #bb3634;
    display: flex;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    flex-direction: column;
}
```

The gun dish is much smaller so I used a dotted border. The trench is a straight line across the center of the div, just like Beggar's canyon back home.

```CSS

.outer_dish {
    background-color: #000000;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 2px dotted #bb3634;
    margin-right: 70px;
    margin-top: -95px; 
}

.trench {
    background-color: #bb3634;
    height: 5px;
    width: 100%;
    position: absolute;
}
```