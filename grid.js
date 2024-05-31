export function outSideGrid(position) {
   return (position.x<1 || position.x>21 ||
    position.y<1 || position.y>21)
}