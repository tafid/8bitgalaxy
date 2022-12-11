import {
  computePosition,
  flip,
  shift,
  offset,
  arrow,
  autoPlacement,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.0.4/+esm";
import Opentip from "opentip/lib/opentip.js";

// import Adapter from "opentip/lib/adapter-component.js";

export function useTooltip(cardElement, card) {
  const body = document.body;
  const nodes = [];

  const showTooltip = () => {
    draw(cardElement.querySelector(":scope .Spec.Level > div"), `Level: ${card.Level}\nClass: ${card.Klass}`);
    draw(cardElement.querySelector(":scope > .Image > div"), "Type: " + card.Type);
  };

  const hideTooltip = () => {
    for (let i = 0; i <= nodes.length; i++) {
      body.removeChild(nodes.pop());
    }
  };

  const draw = (el, text, place = "bottom") => {
    // const tpl = document.querySelector("#tooltip-tpl").content.cloneNode(true);
    // const tooltip = tpl.querySelector(".tooltip");
    // const arrowElement = tooltip.querySelector(":scope > .arrow");
    const tpl = document.querySelector("#hint-tpl").content.cloneNode(true);
    const tooltip = tpl.querySelector(".hint");
    const arrowElement = tooltip.querySelector(":scope > .arrow");

    body.appendChild(tooltip);
    nodes.push(tooltip);
    computePosition(el, tooltip, {
      placement: "left",
      middleware: [
        flip(),
        // shift(),
        // offset(5),
        // arrow({element: arrowElement}),
        // autoPlacement({padding: 5}),
      ],
    }).then(({x, y, placement, middlewareData}) => {
      // tooltip.querySelector(":scope > span").innerText = text;
      tooltip.querySelector(":scope > .hint-content").innerText = text;
      Object.assign(tooltip.style, {
        left: `${x + 40}px`,
        top: `${y}px`,
        zIndex: 6,
      });

      // const {x: arrowX, y: arrowY} = middlewareData.arrow;
      //
      // const staticSide = {
      //   top: "bottom",
      //   right: "left",
      //   bottom: "top",
      //   left: "right",
      // }[placement.split("-")[0]];
      //
      // Object.assign(arrowElement.style, {
      //   left: arrowX != null ? `${arrowX}px` : "",
      //   top: arrowY != null ? `${arrowY}px` : "",
      //   right: "",
      //   bottom: "",
      //   [staticSide]: "-4px",
      // });
    });
  };

  return [showTooltip, hideTooltip];
}
