import s from './loading.module.css'

export default function Loading() {
  return (
    <div className={s.loadingBg}>
      <div className={s.text}>
        <svg
          style={{ margin: 'auto', display: 'block', shapeRendering: 'auto' }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="32"
            strokeWidth="8"
            stroke="#e47e24"
            strokeDasharray="50.26548245743669 50.26548245743669"
            fill="none"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
        </svg>
        Please Wait..
      </div>
    </div>
  )
}
