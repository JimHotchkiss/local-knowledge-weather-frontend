# UX
    * When user opens app, a spash page says 'Lets see what the locals are saying. Search by city for weather conditions.'
    * When the user searches by city
        - A fetch request is made to the weather API
        - From this returned data, we make another fetch request for that city's 'local knowlege'
            * User contribute their 'local knowledge' for Cities
        - What the user sees is 
            * A forcast card that shows the current weather conditions per the weather api
            * A list of 'local knowledge' contributions from other users
                - The user can contribute their local knowledge to different locations
            * And, possibly, a map of the location


# 3/6/2021
    [] Create a map feature that takes the lat and long of from the fetched data, and uses it to render a map of the area.
