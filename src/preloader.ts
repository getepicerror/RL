/// <reference path="./_all.d.ts" />
require.config({
    baseUrl: "src",
    paths: {
        "pixi": "../lib/pixi.min",
        "pixi-filters": "../lib/pixi-filters",
        "pixiSpine": "../lib/pixi-spine.min",
        "jquery": "../lib/jquery-3.2.1.min",
        "tweenmax": "../lib/TweenMax.min",
        "timelinemax": "../lib/TimelineMax.min",
        "easePack": "../lib/EasePack.min",
        "howler": "../lib/howler.min",
        "seedrandom": "../lib/seedrandom.min"
    }
});

require(["pixi", "tweenmax", "howler", "seedrandom"], function (pixiClass, tweenmax, howler, seedrandom) {
    window["PIXI"] = pixiClass;
    window["seedrandom"] = seedrandom;
    require(["main", "pixi-filters"], (main, pixiFilters) => {
        window["PIXI.filters"] = pixiFilters;
        new main.Main();
    })
});
