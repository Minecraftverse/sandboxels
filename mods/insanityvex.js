elements.magic_dust = {
    color: "#aa00ff",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 500,
    reactions: {
        "water": { "elem1": "magic_mud", "elem2": null },
        "fire": { "elem1": "ash", "chance": 0.3 }
    }
};
