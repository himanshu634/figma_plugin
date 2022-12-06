figma.showUI(__html__)

figma.ui.resize(400, 400);

// const component = figma.root.findOne(node => node.type == "FRAME" && node.name == "frame") as FrameNode;
// console.log(component)
// const component2 = component.clone();
// component.name = "new component"
// figma.currentPage.appendChild(component2)
const page = figma.root.findOne(node => node.type == "PAGE" && node.name == "Page 1") as PageNode;
console.log("parent ", figma.root)

const destination = figma.createPage();
destination.name = "destination";
let component;
console.log(destination.children);
for (let i = 0; i < page.children.length; i++) {
  component = page.children[i] as FrameNode;
  destination.appendChild(component.clone());
}

// const page = figma.createPage();
// page.name = "New page"
// page.appendChild(component2)
// figma.root.appendChild(page);

console.log("appendChild")