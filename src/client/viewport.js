var cornerstone = (function (cornerstone, csc) {
    if(cornerstone === undefined) {
        cornerstone = {};
    }

    cornerstone.setViewport= function (element, viewport) {
        enabledElement = cornerstone.getEnabledElement(element);
        if(viewport.windowWidth < 1) {
            viewport.windowWidth = 1;
        }
        if(viewport.scale < 0.0001) {
            viewport.scale = .25;
        }
        enabledElement.viewport = viewport;
        cornerstone.updateImage(element);

        var event = new CustomEvent(
            "CornerstoneViewportUpdated",
            {
                detail: {
                    viewport: viewport,
                    element: element,
                },
                bubbles: false,
                cancelable: false
            }
        );
        element.dispatchEvent(event);

    };

    cornerstone.getViewport= function (element) {
        return cornerstone.getEnabledElement(element).viewport;
    };

    // module/private exports

    return cornerstone;
}(cornerstone, cornerstoneCore));