/**
 * Created by turner on 6/29/15.
 */
function letsGo() {

    var svg,
        containerGroup,
        foreignObject,
        element,
        drag;

    drag = d3.behavior.drag()
        .origin(Object)
        .on("drag", function(d){

            d.x = d3.event.x;
            d.y = d3.event.y;

            d3.select(this).attr("transform", function(d) {
                return "translate("+d.x+","+d.y+")";
            });

        });

    svg = d3.select("body")
        .append("svg")
        .attr( "width", 4096)
        .attr("height", 4096)

        // allow children to extend beyond parent's extent
        // see http://stackoverflow.com/a/31140733/116169
        .attr("overflow", "visible");

    containerGroup = svg
        .selectAll("g")
        .data([{ x: 0, y: 0 }])
        .enter()
        .append("g")
        .attr("id", "draggable")
        .call(drag);

    //containerGroup
    //    .append("rect")
    //    .attr("cursor", "move")
    //    .attr("fill", "red")
    //    .attr("x", -128)
    //    .attr("y", -128)
    //    .attr( "width", 512 + 128)
    //    .attr("height", 512 + 128);


    foreignObject = containerGroup
        .append("foreignObject")
        .attr("cursor", "move")
        .attr( "width", 500)
        .attr("height", 500);

    foreignObject
        .append("xhtml:div")
        .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");


}
