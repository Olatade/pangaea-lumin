import styled from "styled-components";


const PulsateStyle = styled.div`
    animation-name: color;
    animation-duration: 2s;
    animation-iteration-count: infinite;

  @keyframes color {
    0% {
      background-color: #d1d5d2;
    }
    50% {
      background-color: #e2e6e3;
    }
    100% {
      background-color: #d1d5d2;
    }
  }
`;


function ProductList() {
  return (
    <div className="px-6 md:px-28 py-8 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 bg-primary-light">
      <div className="space-y-3">
        <PulsateStyle className="rounded h-44"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
      </div>

      <div className="space-y-3">
        <PulsateStyle className="rounded h-44"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
      </div>

      <div className="space-y-3">
        <PulsateStyle className="rounded h-44"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
        <PulsateStyle className="rounded h-6"></PulsateStyle>
      </div>

      <div className="space-y-3 md:hidden">
        <div className="rounded bg-secondary-dark h-44"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
      </div>

    </div>
  )
}

export default ProductList;