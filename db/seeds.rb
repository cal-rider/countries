# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


trips = Trip.create([
    { 
        name: 'Enchanting Europe',
        image_url:"https://edoc.coe.int/5468/map-of-the-council-of-europe-47-member-states.jpg",
        description: "Europe is neat",
        priority: 1
    }, 
    { 
        name: 'Amazing Africa',
        image_url:"https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29.svg",
        description: "Afria sounds like a fun place to go",
        priority: 2
    }
])

locations = Location.create([
    {
        name: 'England',
        description: "Gotta see the Queen!",
        priority: 1,
        Trip_id:1
    },   
    {
        name: 'France',
        description: "I love cheese!",
        priority: 2,
        Trip_id:1
    },
    {
        name: 'Tanzania',
        description: "Mount Kilimanjaro is a must!",
        priority: 1,
        Trip_id:2
    },   
    {
        name: 'Zimbabwe',
        description: "I would like to see Victoria Falls!",
        priority: 2,
        Trip_id:2
    }

])