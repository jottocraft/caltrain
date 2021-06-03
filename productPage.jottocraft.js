Object.defineProperty(window, "s", {
    writable: false,
    value: {
        name: "Caltrain Live",
        description: "See ~detailed~ and ~up-to-date~ information for every Caltrain in ~real-time~.",
        productImage: "/assets/productImage.png",
        colors: { brand: "#71717A", brandDark: "#52525B" },
        copyright: "(c) jottocraft 2018-2021. All rights reserved.",
        links: [
            { name: "App on Google Play", type: "main", newWindow: true, icon: "shop", href: "https://play.google.com/store/apps/details?id=com.jottocraft.train" }
        ],
        sections: [
            {
                type: "split",
                left: {
                    image: "/assets/subway.svg",
                    icon: "train",
                    title: "Watch Every Train",
                    text: "Caltrain Live shows you every active Caltrain at a glance, with per-stop real-time delay data."
                }, right: {
                    image: "/assets/timetable.svg",
                    icon: "place",
                    title: "Trip Planner",
                    text: "Caltrain Live keeps a copy of the latest timetable on your device, so you can see scheduled trains without internet or plan a trip."
                }
            },
            {
                type: "full",
                image: "/assets/data.svg",
                icon: "checklist",
                title: "Detailed information",
                paragraph: true,
                text: [
                    "- See the number of cars per train and see if each train is using the older Gallery cars or the newer Bombardier cars",
                    "- See the distance between each station to scale",
                    "- Real-time delay data is updated every minute and includes seconds",
                    "- See estimates for when trains skip unscheduled stops",
                    "- See the general speed limit, at-grade railroad crossings, mileposts, control points, signal rules, Caltrain Radio, and more with Railfan mode"
                ].join("\n")
            }
        ]
    }
});