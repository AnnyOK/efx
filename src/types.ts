 type NavItemProp={
    title:string,
    img:string
    activeIndex:string,
    onClick:(title:string,to:string)=>void
    to:string
}