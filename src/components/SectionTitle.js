export default function SectionTitle(props){
  // text-[#2ec4b6]
  return(
    <div
      className={"w-full text-center text-5xl font-[Playfair] font-semibold underline underline-offset-4 "}>{props.title}</div>
  )
}