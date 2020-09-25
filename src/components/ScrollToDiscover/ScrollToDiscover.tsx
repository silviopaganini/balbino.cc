import React, { useRef } from 'react'
import { Box, useColorMode } from 'theme-ui'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import { useGlobalState } from 'state'
import theme from 'theme'

const AnimBox = motion.custom(Box)

const ScrollToDiscover = () => {
  const ref = useRef(null)
  const mouse = useMouse(document.body, {})
  const [state] = useGlobalState('ui')
  const [mode] = useColorMode()

  const SIZE = 208

  return (
    <Box
      ref={ref}
      sx={{
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <AnimBox
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          width: SIZE,
          height: SIZE,
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.2,
        }}
        animate={{
          opacity: state.showCircle && mouse.x ? 1 : 0,
          x: (mouse.clientX || window.innerWidth / 2) - SIZE / 2,
          y: (mouse.clientY || window.innerHeight / 2) - SIZE / 2,
        }}
      >
        <AnimBox
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            width: SIZE,
            height: SIZE,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
        >
          <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} fill="none">
            <path
              d="M112.203 12.868l-2.397-11.073-1.062 10.733-1.769-.174L108.197 0l2.958.294 2.183 10.585 4.22-9.951 2.958.293-1.222 12.348-1.77-.174 1.062-10.732-4.527 10.385-1.856-.18zM129.337 3.21l1.989.521 1.436 13.202-1.883-.494-.281-2.857-5.535-1.448-1.602 2.363-1.79-.467 7.666-10.82zm-3.332 7.57l4.447 1.16-.641-6.714-3.806 5.553zM141.522 14.964c-.153-.053-.307-.107-.454-.167l-.467-.194-1.917-.794-1.949 4.692-1.643-.68 4.768-11.46 3.558 1.475c.702.293 1.329.6 1.89.934.554.334 1.002.714 1.329 1.141.327.428.521.908.574 1.442.053.534-.06 1.148-.347 1.835-.381.921-.875 1.536-1.482 1.856-.608.32-1.296.434-2.07.354l.574 6.067-1.83-.761-.534-5.74zm-.628-6.474l-1.609 3.864 2.037.848c.427.18.828.327 1.215.44.381.12.741.174 1.068.16.328-.013.628-.113.888-.306.261-.194.488-.514.675-.962.187-.447.254-.834.207-1.161a1.534 1.534 0 00-.407-.848 3.21 3.21 0 00-.868-.64 15 15 0 00-1.169-.548l-2.037-.847zM157.414 25.122c-.868.901-1.89 1.395-3.052 1.469-1.161.08-2.33-.234-3.512-.935-.781-.467-1.395-1.014-1.849-1.642a4.867 4.867 0 01-.868-2.049 5.81 5.81 0 01.086-2.316 8.455 8.455 0 011.015-2.45c.494-.834 1.069-1.521 1.703-2.062.641-.54 1.322-.92 2.05-1.14a5.107 5.107 0 012.25-.161c.775.113 1.542.394 2.304.848.554.333 1.035.72 1.442 1.16.401.441.714.922.928 1.436.214.514.334 1.048.354 1.615.02.56-.06 1.128-.24 1.702l-1.603-.667c.1-.36.147-.721.147-1.088 0-.36-.073-.714-.207-1.062a3.414 3.414 0 00-.614-.974 4.44 4.44 0 00-1.055-.841 3.878 3.878 0 00-1.503-.534 3.508 3.508 0 00-1.549.154c-.514.173-1.015.467-1.509.887-.487.42-.935.975-1.342 1.655-.401.675-.668 1.322-.808 1.943-.14.62-.16 1.208-.073 1.748a3.5 3.5 0 00.594 1.476c.307.44.708.8 1.215 1.1.868.515 1.67.722 2.404.621.734-.1 1.382-.427 1.943-.974l1.349 1.081zM170.608 32.284c-.634.768-1.315 1.368-2.036 1.796-.728.427-1.463.687-2.224.787a5.35 5.35 0 01-2.264-.207 6.217 6.217 0 01-2.136-1.181c-.695-.568-1.222-1.208-1.589-1.91a5.16 5.16 0 01-.601-2.195 5.847 5.847 0 01.387-2.323c.294-.787.741-1.541 1.342-2.276.601-.727 1.262-1.308 1.99-1.742a5.985 5.985 0 012.237-.8 5.444 5.444 0 012.29.173c.761.22 1.476.614 2.15 1.168.674.554 1.195 1.175 1.562 1.869.368.687.575 1.415.621 2.169.047.754-.073 1.528-.353 2.323-.281.8-.742 1.582-1.376 2.349zm-1.395-1.148c.507-.614.874-1.228 1.095-1.835.227-.608.327-1.182.3-1.736a3.632 3.632 0 00-.407-1.548 4.005 4.005 0 00-1.042-1.268 3.992 3.992 0 00-1.442-.774 3.68 3.68 0 00-1.596-.107 4.503 4.503 0 00-1.643.627c-.554.334-1.081.814-1.589 1.428-.507.614-.874 1.229-1.095 1.836-.227.607-.327 1.181-.3 1.735.02.554.16 1.068.407 1.549.247.48.594.9 1.042 1.268.44.367.921.62 1.442.774a3.682 3.682 0 001.596.107 4.503 4.503 0 001.642-.628c.548-.34 1.082-.814 1.59-1.428zM175.409 32.818c.44-.4.921-.64 1.429-.72a3.423 3.423 0 011.515.1c.501.14.982.366 1.436.673.461.307.861.654 1.202 1.028.38.414.694.861.948 1.335s.427.961.507 1.462c.081.5.067 1-.04 1.502-.106.5-.327.987-.654 1.455l-1.335-1.108c.22-.334.354-.668.4-1.008.047-.34.034-.668-.046-.981a3.252 3.252 0 00-.381-.901 4.887 4.887 0 00-.581-.775 4.344 4.344 0 00-.621-.56 3.153 3.153 0 00-.801-.447 2.003 2.003 0 00-.882-.134c-.3.02-.581.147-.841.38-.407.367-.581.795-.521 1.275.054.48.234.975.541 1.495l.748 1.295c.247.434.481.888.701 1.355.227.467.374.948.441 1.428s.04.961-.087 1.429c-.127.467-.427.92-.895 1.348-.461.42-.948.687-1.469.8a3.558 3.558 0 01-1.569 0 4.956 4.956 0 01-1.549-.66 7.03 7.03 0 01-1.389-1.175c-.501-.554-.888-1.114-1.142-1.688a4.964 4.964 0 01-.447-1.702 4.1 4.1 0 01.214-1.636c.18-.527.46-1.02.834-1.481l1.336 1.108c-.521.707-.761 1.428-.721 2.169.04.74.4 1.482 1.081 2.23.628.693 1.249 1.1 1.863 1.24.615.134 1.149-.006 1.609-.427.247-.227.414-.467.488-.727.08-.254.1-.527.067-.814a3.39 3.39 0 00-.267-.921c-.147-.327-.314-.661-.508-1.002l-.808-1.388a7.234 7.234 0 01-.574-1.195 4.184 4.184 0 01-.254-1.261 3.225 3.225 0 01.207-1.248c.16-.42.428-.801.815-1.148zM190.633 46.454l2.357 3.884c.307.5.554 1.001.761 1.509.2.5.314.987.327 1.455a2.68 2.68 0 01-.3 1.321c-.214.414-.588.781-1.122 1.108-.514.307-1.042.487-1.583.52a2.608 2.608 0 01-1.475-.306c.1.64.033 1.221-.187 1.748-.221.528-.668.995-1.336 1.402-.574.347-1.121.547-1.636.587a3.097 3.097 0 01-1.462-.227 3.95 3.95 0 01-1.282-.894 7.682 7.682 0 01-1.088-1.415l-2.578-4.252 10.604-6.44zm-8.347 7.141l1.669 2.75c.468.768.955 1.255 1.476 1.455.514.207 1.082.12 1.689-.247.641-.387.969-.854.982-1.395.013-.54-.22-1.215-.714-2.022l-1.61-2.65-3.492 2.11zm4.748-2.876l1.569 2.59c.374.62.794 1.034 1.262 1.254.467.22 1.015.14 1.642-.24.555-.334.828-.761.828-1.268 0-.508-.187-1.068-.554-1.676l-1.569-2.59-3.178 1.93zM199.006 61.858l.814 1.889-9.521 9.257-.768-1.782 2.077-1.975-2.271-5.253-2.851.194-.734-1.696 13.254-.634zm-8.019 2.036l1.822 4.218 4.901-4.639-6.723.42zM193.003 76.702l1.83 6.394-1.509.434-2.317-8.103 11.938-3.41.488 1.708-10.43 2.977zM206.09 84.15l.675 4.492c.087.58.127 1.142.12 1.682a4.263 4.263 0 01-.261 1.469 2.7 2.7 0 01-.787 1.1c-.361.301-.848.495-1.463.588-.594.087-1.148.047-1.662-.127a2.557 2.557 0 01-1.242-.854c-.161.627-.441 1.141-.848 1.542-.408.4-.995.66-1.776.774-.668.1-1.242.067-1.736-.093a3.146 3.146 0 01-1.262-.775 4.073 4.073 0 01-.842-1.321 7.822 7.822 0 01-.46-1.729l-.735-4.919 12.279-1.829zm-10.456 3.364l.474 3.177c.134.888.401 1.522.795 1.91.394.386.948.526 1.649.42.741-.114 1.222-.414 1.442-.908.22-.494.26-1.208.12-2.143l-.46-3.07-4.02.614zm5.489-.82l.447 2.996c.107.714.334 1.262.681 1.649.347.38.881.52 1.609.413.641-.093 1.062-.38 1.255-.847.194-.467.241-1.055.134-1.755l-.447-2.997-3.679.54zM195.413 100.436l-.086-1.776 12.399-.587.087 1.775-12.4.588zM195.153 112.029l10.891-5.106-10.544-.64.107-1.776 12.393.748-.16 2.596-10.871 5.106 10.524.641-.107 1.775-12.393-.747.16-2.597zM198.131 130.777c-.975-.213-1.816-.547-2.53-.994a5.616 5.616 0 01-1.71-1.622 5.333 5.333 0 01-.848-2.109c-.133-.774-.107-1.588.08-2.443.194-.874.521-1.635.982-2.282a5.221 5.221 0 011.689-1.536c.661-.38 1.409-.614 2.244-.714.834-.1 1.709-.046 2.637.16.928.201 1.743.528 2.457.982a5.844 5.844 0 011.73 1.621c.44.635.734 1.342.881 2.116a6.05 6.05 0 01-.06 2.443c-.187.854-.507 1.602-.955 2.243a5.266 5.266 0 01-1.649 1.541c-.654.388-1.396.635-2.23.741-.842.12-1.743.067-2.718-.147zm.387-1.768c.782.173 1.489.22 2.13.14.641-.074 1.202-.247 1.683-.521a3.725 3.725 0 001.195-1.068c.314-.44.534-.941.655-1.501a4.11 4.11 0 00.033-1.636 3.655 3.655 0 00-.634-1.468c-.321-.447-.761-.841-1.309-1.175-.554-.34-1.215-.594-1.996-.76-.782-.174-1.489-.221-2.13-.141-.641.074-1.202.247-1.683.521a3.675 3.675 0 00-1.195 1.068c-.314.44-.535.941-.655 1.502a4.105 4.105 0 00-.033 1.635c.1.534.314 1.021.634 1.468.321.447.761.841 1.309 1.182.554.327 1.222.58 1.996.754zM197.811 140.923c.547.247.954.587 1.228 1.021.274.44.447.914.514 1.428a5.105 5.105 0 01-.046 1.589 6.852 6.852 0 01-.461 1.515 6.401 6.401 0 01-.848 1.401 4.812 4.812 0 01-1.135 1.048 4.073 4.073 0 01-1.389.567 4.036 4.036 0 01-1.603-.02l.481-1.668c.394.067.755.053 1.082-.034.327-.093.621-.233.881-.433.261-.201.488-.434.675-.708.193-.273.353-.554.48-.841.1-.227.187-.494.267-.794.074-.3.107-.607.094-.914a2.012 2.012 0 00-.227-.861 1.355 1.355 0 00-.688-.614c-.501-.227-.961-.214-1.375.026-.414.24-.802.608-1.156 1.088l-.888 1.202c-.3.4-.621.794-.961 1.188a4.9 4.9 0 01-1.135.974 3.5 3.5 0 01-1.349.494c-.481.067-1.015-.027-1.596-.287-.567-.254-1.008-.594-1.322-1.021a3.603 3.603 0 01-.628-1.435 4.91 4.91 0 01-.013-1.682 6.619 6.619 0 01.528-1.742c.307-.681.667-1.255 1.088-1.722a4.897 4.897 0 011.382-1.088 4.035 4.035 0 011.589-.454 4.914 4.914 0 011.696.174l-.48 1.668c-.855-.193-1.616-.12-2.277.207-.661.334-1.196.961-1.61 1.876-.38.854-.514 1.588-.394 2.202.121.614.468 1.048 1.035 1.302.308.14.595.193.862.16.267-.034.527-.12.774-.267.247-.147.494-.354.735-.614.24-.261.481-.548.714-.868l.948-1.295c.261-.36.548-.694.868-1.001a4.016 4.016 0 011.055-.734 3.221 3.221 0 011.229-.314c.441-.026.895.067 1.376.281zM194.512 155.092l-4.48 7.269-1.336-.821 3.553-5.76-3.119-1.922-3.345 5.426-1.335-.821 3.345-5.426-3.439-2.116-3.552 5.76-1.335-.821 4.48-7.269 10.563 6.501zM177.699 160.746l-4.16 5.192-1.228-.981 5.274-6.574 9.689 7.762-1.108 1.388-8.467-6.787zM179.221 175.676l-6.122 5.96-1.096-1.121 4.848-4.719-2.557-2.623-4.567 4.445-1.096-1.128 4.568-4.445-2.818-2.89-4.848 4.719-1.095-1.128 6.123-5.96 8.66 8.89zM168.004 181.81c.361.48.554.974.581 1.495a3.637 3.637 0 01-.24 1.502 5.03 5.03 0 01-.808 1.368 6.561 6.561 0 01-2.564 1.915 4.734 4.734 0 01-1.503.368 4.041 4.041 0 01-1.489-.181 3.948 3.948 0 01-1.389-.794l1.229-1.221c.314.247.634.414.961.494.334.08.661.093.982.046.32-.046.634-.147.935-.293.3-.147.574-.314.828-.501.2-.147.407-.34.614-.567.214-.227.387-.481.521-.754.133-.274.207-.561.22-.861.007-.301-.093-.594-.3-.875-.327-.44-.735-.654-1.216-.641-.48.014-.994.141-1.535.394l-1.356.621c-.454.2-.928.394-1.415.574a5 5 0 01-1.469.307 3.638 3.638 0 01-1.416-.22c-.454-.174-.875-.514-1.255-1.021-.374-.501-.594-1.008-.661-1.536a3.46 3.46 0 01.153-1.561 4.762 4.762 0 01.808-1.482 6.93 6.93 0 011.302-1.268c.601-.447 1.196-.774 1.79-.981a4.889 4.889 0 011.736-.287c.561.013 1.102.14 1.609.373.508.234.975.561 1.396.975l-1.229 1.228c-.654-.581-1.349-.888-2.09-.921-.741-.027-1.516.26-2.324.861-.747.561-1.215 1.135-1.408 1.735-.194.594-.101 1.142.273 1.642.201.267.428.454.675.554.247.1.514.147.808.14.293-.006.601-.066.941-.18.334-.113.688-.247 1.048-.414l1.456-.674a6.9 6.9 0 011.249-.454 4.022 4.022 0 011.282-.127c.42.027.834.134 1.222.321.387.187.734.487 1.048.901zM144.707 190.033c-.334-1.208-.24-2.33.281-3.371s1.389-1.889 2.584-2.55c.794-.44 1.582-.694 2.357-.76a4.926 4.926 0 012.21.293c.701.261 1.349.681 1.956 1.248.608.568 1.142 1.275 1.603 2.116.467.854.774 1.689.915 2.516.14.828.12 1.609-.054 2.343a5.229 5.229 0 01-1.001 2.022c-.488.608-1.122 1.128-1.897 1.556a6.397 6.397 0 01-1.729.654 5.104 5.104 0 01-1.709.073 4.507 4.507 0 01-1.569-.514 5.101 5.101 0 01-1.349-1.074l1.389-1.042c.26.267.547.494.861.674.314.181.654.301 1.015.361.36.06.748.047 1.155-.033a4.46 4.46 0 001.262-.481 3.91 3.91 0 001.222-1.021c.32-.407.541-.881.654-1.415.114-.534.114-1.115 0-1.749-.113-.634-.36-1.301-.748-2.002-.38-.688-.801-1.248-1.268-1.682-.468-.434-.955-.748-1.469-.948a3.452 3.452 0 00-1.569-.233 3.976 3.976 0 00-1.569.487c-.889.487-1.469 1.068-1.757 1.755-.287.681-.333 1.408-.14 2.169l-1.636.608zM141.909 198.976l3.813-1.481.568 1.461-9.288 3.611-.568-1.462 3.813-1.481-3.933-10.099 1.656-.64 3.939 10.091zM133.102 203.735l-8.286 2.083-.381-1.522 6.564-1.649-.895-3.551-6.183 1.556-.38-1.522 6.183-1.555-.982-3.918-6.564 1.648-.38-1.521 8.286-2.083 3.018 12.034zM117.217 206.979c-.988.106-1.936.113-2.831.013-.894-.1-1.696-.347-2.397-.754-.701-.407-1.288-.988-1.749-1.735-.461-.748-.761-1.722-.888-2.91-.127-1.189-.047-2.203.24-3.037.287-.835.735-1.522 1.336-2.069a6.029 6.029 0 012.176-1.255 13.09 13.09 0 012.765-.594l2.864-.314 1.342 12.334-2.858.321zm-6.062-5.58c.113 1.068.367 1.889.754 2.463.387.58.861.994 1.416 1.248a4.44 4.44 0 001.823.394c.661.006 1.308-.02 1.956-.094l1.042-.113-1.002-9.218-1.042.114c-.641.067-1.288.18-1.929.334-.641.153-1.209.407-1.69.774-.487.367-.854.874-1.115 1.522-.26.654-.327 1.508-.213 2.576zM89.814 196.407l-3.492 10.058-1.836-.207 4.52-11.974 2.137.241 1.269 10.371 3.525-9.831 2.137.24 1.776 12.688-1.93-.22-1.241-10.599-3.493 10.059-2.063-.234-1.309-10.592zM71.005 196.073c.28-.955.668-1.776 1.162-2.456a5.764 5.764 0 011.73-1.602 5.348 5.348 0 012.163-.708c.787-.086 1.595 0 2.43.241.861.253 1.603.627 2.21 1.128a5.115 5.115 0 011.416 1.782c.334.687.52 1.448.56 2.282a7.9 7.9 0 01-.333 2.617c-.267.907-.648 1.702-1.142 2.382a5.85 5.85 0 01-1.736 1.616c-.661.4-1.382.647-2.17.74a6.135 6.135 0 01-2.437-.22c-.835-.24-1.563-.607-2.17-1.101a5.36 5.36 0 01-1.43-1.749c-.34-.674-.54-1.435-.594-2.276-.046-.821.06-1.722.34-2.676zm1.743.5c-.22.768-.32 1.469-.287 2.116.033.648.166 1.215.407 1.715.24.501.567.915.988 1.262.42.34.901.594 1.456.754.547.16 1.095.207 1.636.147a3.625 3.625 0 001.509-.534c.467-.294.888-.701 1.262-1.228s.674-1.175.894-1.942c.22-.768.32-1.469.287-2.116-.033-.647-.166-1.215-.407-1.715a3.605 3.605 0 00-.988-1.262 4.09 4.09 0 00-1.456-.754 4.155 4.155 0 00-1.636-.147c-.54.067-1.041.24-1.509.534-.467.294-.888.701-1.262 1.228-.373.534-.674 1.182-.894 1.942zM63.112 191.434c.154.053.3.12.448.187.147.067.3.14.46.214l1.883.867 2.13-4.618 1.616.74-5.201 11.267-3.499-1.615a15.018 15.018 0 01-1.85-1.008c-.54-.354-.974-.748-1.282-1.188a2.773 2.773 0 01-.52-1.462c-.034-.534.106-1.141.42-1.822.42-.908.935-1.502 1.55-1.796.614-.293 1.308-.387 2.083-.273l-.34-6.087 1.795.827.307 5.767zm.381 6.494l1.756-3.804-2.003-.921c-.42-.194-.815-.354-1.195-.487a3.211 3.211 0 00-1.062-.201c-.327 0-.628.094-.901.274-.267.187-.508.494-.708.941-.207.441-.287.828-.254 1.148.034.327.16.614.374.861s.494.474.841.674c.348.2.728.401 1.149.594l2.003.921zM53.437 187.59l-8.112 2.122-1.857-1.188 6.657-1.682-.414-9.057 1.797 1.148.32 7.462 2.844-.727 2.137-3.338 1.496.961-6.697 10.446-1.496-.961 3.325-5.186zM35.155 181.843l-3.278-3.144c-.42-.407-.795-.827-1.122-1.261a4.18 4.18 0 01-.688-1.322 2.66 2.66 0 01-.046-1.354c.1-.454.367-.908.8-1.355a3.531 3.531 0 011.396-.915 2.55 2.55 0 011.51-.08c-.261-.594-.348-1.174-.274-1.742.08-.567.387-1.134.934-1.695.468-.487.942-.814 1.43-.988a2.997 2.997 0 011.468-.153c.494.066.989.247 1.47.534.487.287.96.647 1.415 1.087l3.585 3.444-8.6 8.944zm2.384-5.039l-2.183-2.096c-.521-.5-1.035-.794-1.543-.887-.507-.094-1.015.126-1.529.66-.447.467-.607.948-.474 1.435.134.494.454.981.968 1.475l2.184 2.096 2.577-2.683zm3.846-4.005l-2.317-2.229c-.648-.621-1.248-.961-1.796-1.028-.554-.066-1.075.16-1.57.674-.52.541-.714 1.075-.587 1.596.127.527.528 1.114 1.215 1.775l2.237 2.149 2.818-2.937zM25.12 171.645l-5.329-6.675 1.229-.981 4.22 5.286 2.864-2.282-3.973-4.98 1.229-.981 3.973 4.986 3.158-2.516-4.22-5.293 1.229-.981 5.328 6.674-9.709 7.743zM17.147 158.062l2.137 3.491-1.342.821-5.209-8.497 1.342-.821 2.137 3.491 9.248-5.66.928 1.515-9.241 5.66zM16.259 136.511L5.762 138.34l-.707-1.709 12.666-1.862.828 1.982-8.46 6.147 10.31-1.695.828 1.982-10.236 7.723-.748-1.796 8.667-6.234-10.497 1.829-.794-1.916 8.64-6.28zM3.9 132.113l-2.004-8.303 1.53-.367 1.588 6.574 3.56-.861-1.496-6.194 1.529-.367 1.495 6.194 3.927-.948-1.59-6.574 1.53-.367 2.003 8.303-12.073 2.91zM1.142 119.158l-.928-8.49 1.562-.174.735 6.728 3.645-.4-.694-6.334 1.562-.174.695 6.334 4.013-.44-.735-6.728 1.563-.174.928 8.49-12.346 1.362zM12.633 98.687l-10.73 5.433 10.557.314-.054 1.775L0 105.842l.08-2.596 10.71-5.44-10.536-.314.053-1.775 12.406.374-.08 2.596zM2.564 80.366c.127-.56.32-1.061.567-1.508.254-.448.555-.815.909-1.095.353-.28.754-.474 1.195-.58.44-.107.928-.094 1.449.026a4.441 4.441 0 011.93.988c.567.494 1.094 1.108 1.582 1.829.487.72.941 1.535 1.375 2.436.434.9.868 1.835 1.31 2.803l1.528-6.627 1.442.333-2.036 8.83-1.382-.32a98.868 98.868 0 00-1.556-3.41 26.351 26.351 0 00-1.422-2.604c-.468-.727-.935-1.308-1.41-1.742-.473-.433-.987-.714-1.535-.84-.64-.147-1.195-.067-1.662.253-.461.314-.782.834-.949 1.569-.073.327-.1.66-.073 1 .027.341.113.655.274.948.153.294.387.554.7.788.315.234.722.414 1.23.54l-.401 1.576a4.165 4.165 0 01-1.556-.654 3.734 3.734 0 01-1.088-1.155 4.024 4.024 0 01-.528-1.542c-.08-.574-.04-1.188.107-1.842zM18.469 72.07c-.294.78-.688 1.408-1.189 1.882-.5.474-1.088.794-1.756.968-.667.173-1.415.22-2.23.126a10.987 10.987 0 01-2.61-.654c-.909-.34-1.703-.74-2.378-1.208-.674-.46-1.195-.974-1.569-1.541a4.062 4.062 0 01-.66-1.87c-.068-.68.046-1.414.34-2.195.293-.781.687-1.408 1.182-1.882a4.128 4.128 0 011.729-.995c.654-.187 1.389-.233 2.197-.147.808.087 1.669.307 2.584.648.921.347 1.723.747 2.397 1.215.674.467 1.208.987 1.602 1.561.388.581.621 1.208.688 1.896.074.68-.033 1.415-.327 2.196zm-1.295-.48c.347-.935.233-1.816-.348-2.65-.58-.835-1.682-1.556-3.305-2.163-1.609-.6-2.898-.768-3.853-.5-.961.266-1.609.86-1.956 1.781-.347.935-.247 1.81.307 2.63.554.821 1.636 1.529 3.245 2.13 1.623.607 2.925.787 3.906.54.982-.247 1.656-.834 2.004-1.769zM22.235 62.892l-8.627-4.351-1.315 2.603-.968-.487c.193-.408.347-.775.46-1.108a3.48 3.48 0 00.207-.941c.02-.3-.02-.588-.12-.868-.094-.28-.26-.574-.494-.888l.487-.968 11.084 5.587-.714 1.421zM26.034 53.909c.2-.314.348-.647.428-1.008.08-.354.087-.707.02-1.054a2.631 2.631 0 00-.441-1.008c-.227-.327-.54-.614-.942-.875-.427-.273-.848-.44-1.241-.5a2.541 2.541 0 00-2.03.554c-.274.22-.508.48-.695.774-.167.26-.293.527-.367.794-.073.267-.12.52-.127.761-.006.24.02.467.08.674.06.207.134.387.214.528l-.921 1.294-5.182-4.311 3.913-6.08 1.289.827-3.219 5 2.664 2.248a3.008 3.008 0 01.067-1.415c.134-.487.34-.947.628-1.388.294-.46.66-.854 1.088-1.174.427-.32.902-.548 1.41-.668a3.854 3.854 0 011.615-.04c.567.1 1.142.334 1.716.7.6.388 1.055.828 1.369 1.329.314.5.514 1.021.6 1.575a4.21 4.21 0 01-.086 1.655 5.373 5.373 0 01-.688 1.569c-.4.62-.828 1.094-1.295 1.422a4.13 4.13 0 01-1.436.674 3.67 3.67 0 01-1.475.06 5.278 5.278 0 01-1.383-.42l.768-1.436c.715.314 1.39.4 2.003.267.621-.133 1.176-.574 1.656-1.328zM31.216 41.882l-1.075-1.035 7.932-8.243 1.075 1.035-7.932 8.243zM44.376 18.615a5.766 5.766 0 011.436-.741 3.652 3.652 0 011.409-.207 2.88 2.88 0 011.275.374c.4.227.755.554 1.062.988.42.6.681 1.274.775 2.029.093.747.073 1.555-.047 2.422-.12.868-.328 1.776-.608 2.73-.28.954-.58 1.942-.901 2.963l5.568-3.904.848 1.208-7.425 5.206-.814-1.161c.434-1.308.808-2.503 1.122-3.571.313-1.075.54-2.036.68-2.883.14-.855.18-1.602.12-2.243-.06-.64-.253-1.195-.573-1.648-.381-.541-.848-.848-1.403-.922-.554-.073-1.141.1-1.749.534a3.41 3.41 0 00-.728.694c-.207.267-.354.561-.427.881-.08.32-.08.675-.007 1.055.074.38.26.788.548 1.221l-1.356.901a4.216 4.216 0 01-.72-1.528 3.726 3.726 0 01-.041-1.582c.1-.52.314-1.02.641-1.495.327-.5.768-.934 1.315-1.321zM61.757 23.067c-.741.387-1.456.587-2.143.6a4 4 0 01-1.957-.454c-.614-.32-1.195-.78-1.742-1.395-.548-.614-1.049-1.355-1.503-2.229-.447-.86-.768-1.688-.961-2.483-.187-.794-.234-1.528-.134-2.196.1-.667.354-1.281.761-1.835.408-.554.982-1.021 1.723-1.408.741-.387 1.456-.594 2.137-.614.687-.02 1.335.12 1.95.413.614.3 1.188.755 1.736 1.362.547.607 1.041 1.341 1.488 2.203.454.874.782 1.708.975 2.51.194.8.24 1.54.147 2.235a4.034 4.034 0 01-.754 1.869c-.408.567-.982 1.041-1.723 1.422zm-.641-1.222c.881-.46 1.389-1.195 1.516-2.203.127-1.007-.214-2.282-1.015-3.81-.795-1.522-1.643-2.503-2.53-2.944-.896-.44-1.777-.434-2.645.02-.881.46-1.395 1.181-1.53 2.163-.133.974.195 2.229.996 3.75.801 1.536 1.65 2.537 2.544 3.01.895.468 1.783.475 2.664.014zM68.287 6.16c.541-.2 1.062-.313 1.576-.347.514-.033.982.02 1.416.16.427.14.808.368 1.135.688.327.32.587.728.768 1.228.253.688.327 1.408.22 2.156a9.3 9.3 0 01-.668 2.323c-.34.8-.774 1.628-1.288 2.483-.515.854-1.062 1.728-1.636 2.63l6.39-2.343.507 1.388-8.513 3.117-.488-1.335a91.734 91.734 0 002.004-3.164 24.149 24.149 0 001.402-2.616c.354-.788.587-1.495.694-2.136.107-.64.06-1.215-.133-1.742-.228-.62-.601-1.034-1.115-1.255-.515-.213-1.129-.193-1.83.06a3.339 3.339 0 00-.881.48 2.341 2.341 0 00-.641.742c-.16.293-.254.627-.274 1.014-.027.387.046.828.213 1.322l-1.542.527a4.062 4.062 0 01-.3-1.662 3.77 3.77 0 01.374-1.542 4.133 4.133 0 011.001-1.281c.447-.36.982-.66 1.61-.894zM81.428 15.311l-2.37-9.364-2.825.714-.267-1.048c.434-.12.815-.247 1.142-.374.327-.126.608-.28.848-.467.234-.18.427-.4.574-.654.147-.253.26-.574.347-.954l1.049-.267 3.044 12.027-1.542.387z"
              fill={theme.colors?.modes![mode].text}
            />
          </svg>
        </AnimBox>
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Scroll to discover more
        </Box>
      </AnimBox>
    </Box>
  )
}

export default ScrollToDiscover
