
/*
function customrender (reactelement,container){
const domelement = document.createElement(reactelement.type)
domelement.innerHTML = reactelement.children
domelement.setAttribute('href',reactelement.props.href)
domelement.setAttribute('target',reactelement.props.target)

container.appendChild(domelement)
}
*/


// good code compare to uppercode
/*reactelement → what we want to create
  container    → where we want to put it */
  
function customrender(reactelement,container){
const domelement = document.createElement(reactelement.type)
domelement.innerHTML = reactelement.children

for(const prop in reactelement.props){
    if(prop === 'children')continue
    domelement.setAttribute(prop,reactelement.props[prop])
}
container.appendChild(domelement)

}

const reactelement = {
    type: 'a',
    props: {
        href: 'https//google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const maincontainer = document.querySelector('#root')

customrender(reactelement,maincontainer)