import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate()
  const scaleX = useSpring(scrollYProgress, { mass: 1 });
  const backgroundColor = useTransform(scrollYProgress,
    [0, 1],
    ['rgb(86,1,245)', 'rgb(1,245,13)']
  )

  return (
    <div>
      <motion.div
        style={{
          scaleX: scaleX,
          backgroundColor,
          transformOrigin: 'left',
          position: 'sticky',
          top: 0,
          maxWidth: '100%',
          height: '20px'
        }}
      />
      <div style={{ padding: '2rem', fontSize: 20 }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus hendrerit est. In hac habitasse platea
          dictumst. Nulla a pharetra mauris. Aliquam sodales, mauris et tincidunt varius, tortor arcu interdum urna,
          vitae interdum quam eros sit amet magna. Suspendisse fringilla nec odio vel ornare. Nullam vitae magna at
          lacus iaculis posuere. Donec a tellus leo. Aliquam viverra, ex sed eleifend ultrices, sem turpis congue
          turpis, fermentum pulvinar ipsum quam a arcu. Etiam quis porttitor lorem. Integer ac enim sit amet lorem
          lacinia sollicitudin. Curabitur ut augue sed elit varius sollicitudin. Sed a consectetur nibh, sed dignissim
          nisl. In hac habitasse platea dictumst. Maecenas quis tellus ullamcorper, faucibus enim at, maximus risus.
          Etiam eros urna, feugiat tincidunt aliquet id, euismod nec risus. Duis tristique augue at nisl facilisis, non
          porta odio malesuada. In nec iaculis dolor. Suspendisse eros mi, rutrum et magna vitae, molestie dictum risus.
          Donec et sapien nulla. Nunc at malesuada dolor. Sed viverra erat a nisi aliquam, sit amet facilisis nisl
          ultrices. Nam suscipit, nibh sed congue venenatis, dui velit dapibus urna, ac molestie nulla augue eget velit.
          Sed ultricies ultrices dolor sit amet accumsan. Suspendisse finibus pretium turpis sed hendrerit. Aliquam
          elementum et augue ullamcorper facilisis. Fusce non nibh diam.
          Pellentesque fringilla velit vel sem rutrum faucibus. Nulla facilisi. Aliquam risus eros, sodales quis iaculis
          quis, pharetra eu nunc. Nullam non aliquam nisi. Vivamus sit amet ullamcorper erat. Mauris nibh eros, porta id
          odio quis, feugiat tincidunt sem. Suspendisse vitae odio ex. Aenean sollicitudin pharetra turpis quis
          faucibus. Nam tincidunt nibh nisi, varius volutpat velit rhoncus ac. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Nulla porttitor eu eros quis congue. Proin purus libero,
          sodales sed posuere a, volutpat sit amet tellus. Sed rutrum sodales nisl.
          Integer scelerisque consectetur eros viverra dignissim. Quisque nec lacus non odio mattis condimentum maximus
          eu ipsum. Aenean varius vestibulum lacus porta aliquam. Sed elit ipsum, vulputate non nisi a, bibendum iaculis
          est. In scelerisque lectus ut augue varius, vel molestie metus pretium. Suspendisse nec ante ac nulla placerat
          iaculis. Nullam laoreet sit amet odio ut laoreet. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec sit amet urna dignissim, euismod nibh blandit, tincidunt enim. In at erat nec nibh blandit
          facilisis. Cras maximus nisl a dolor imperdiet, sed laoreet ante malesuada. Integer scelerisque, velit nec
          aliquam gravida, dui mauris elementum turpis, in semper velit sem dapibus lorem. Sed varius, ante non eleifend
          consequat, justo nisl sodales dui, in lacinia tortor velit eu ligula. In in elit quis lorem malesuada finibus
          non ac risus. Phasellus eget eros magna. Morbi dignissim tempus vulputate.
          Donec posuere tellus turpis, nec malesuada nisi finibus et. Maecenas vestibulum justo sit amet blandit
          ullamcorper. Sed eu condimentum dui. Ut dapibus dui at magna vulputate luctus quis quis tortor. Pellentesque
          sollicitudin consequat maximus. Sed laoreet vel purus ac varius. Nullam quis sagittis nibh. Ut pulvinar sapien
          non molestie vestibulum. Suspendisse eget eros pharetra, congue lacus a, iaculis arcu. Morbi placerat, lacus
          nec ultricies malesuada, est nisi laoreet nunc, non porta odio tortor quis mi. Phasellus non aliquam eros.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus hendrerit est. In hac habitasse platea
          dictumst. Nulla a pharetra mauris. Aliquam sodales, mauris et tincidunt varius, tortor arcu interdum urna,
          vitae interdum quam eros sit amet magna. Suspendisse fringilla nec odio vel ornare. Nullam vitae magna at
          lacus iaculis posuere. Donec a tellus leo. Aliquam viverra, ex sed eleifend ultrices, sem turpis congue
          turpis, fermentum pulvinar ipsum quam a arcu. Etiam quis porttitor lorem. Integer ac enim sit amet lorem
          lacinia sollicitudin. Curabitur ut augue sed elit varius sollicitudin. Sed a consectetur nibh, sed dignissim
          nisl. In hac habitasse platea dictumst. Maecenas quis tellus ullamcorper, faucibus enim at, maximus risus.
          Etiam eros urna, feugiat tincidunt aliquet id, euismod nec risus. Duis tristique augue at nisl facilisis, non
          porta odio malesuada. In nec iaculis dolor. Suspendisse eros mi, rutrum et magna vitae, molestie dictum risus.
          Donec et sapien nulla. Nunc at malesuada dolor. Sed viverra erat a nisi aliquam, sit amet facilisis nisl
          ultrices. Nam suscipit, nibh sed congue venenatis, dui velit dapibus urna, ac molestie nulla augue eget velit.
          Sed ultricies ultrices dolor sit amet accumsan. Suspendisse finibus pretium turpis sed hendrerit. Aliquam
          elementum et augue ullamcorper facilisis. Fusce non nibh diam.
          Pellentesque fringilla velit vel sem rutrum faucibus. Nulla facilisi. Aliquam risus eros, sodales quis iaculis
          quis, pharetra eu nunc. Nullam non aliquam nisi. Vivamus sit amet ullamcorper erat. Mauris nibh eros, porta id
          odio quis, feugiat tincidunt sem. Suspendisse vitae odio ex. Aenean sollicitudin pharetra turpis quis
          faucibus. Nam tincidunt nibh nisi, varius volutpat velit rhoncus ac. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Nulla porttitor eu eros quis congue. Proin purus libero,
          sodales sed posuere a, volutpat sit amet tellus. Sed rutrum sodales nisl.
          Integer scelerisque consectetur eros viverra dignissim. Quisque nec lacus non odio mattis condimentum maximus
          eu ipsum. Aenean varius vestibulum lacus porta aliquam. Sed elit ipsum, vulputate non nisi a, bibendum iaculis
          est. In scelerisque lectus ut augue varius, vel molestie metus pretium. Suspendisse nec ante ac nulla placerat
          iaculis. Nullam laoreet sit amet odio ut laoreet. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec sit amet urna dignissim, euismod nibh blandit, tincidunt enim. In at erat nec nibh blandit
          facilisis. Cras maximus nisl a dolor imperdiet, sed laoreet ante malesuada. Integer scelerisque, velit nec
          aliquam gravida, dui mauris elementum turpis, in semper velit sem dapibus lorem. Sed varius, ante non eleifend
          consequat, justo nisl sodales dui, in lacinia tortor velit eu ligula. In in elit quis lorem malesuada finibus
          non ac risus. Phasellus eget eros magna. Morbi dignissim tempus vulputate.
          Donec posuere tellus turpis, nec malesuada nisi finibus et. Maecenas vestibulum justo sit amet blandit
          ullamcorper. Sed eu condimentum dui. Ut dapibus dui at magna vulputate luctus quis quis tortor. Pellentesque
          sollicitudin consequat maximus. Sed laoreet vel purus ac varius. Nullam quis sagittis nibh. Ut pulvinar sapien
          non molestie vestibulum. Suspendisse eget eros pharetra, congue lacus a, iaculis arcu. Morbi placerat, lacus
          nec ultricies malesuada, est nisi laoreet nunc, non porta odio tortor quis mi. Phasellus non aliquam eros.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus hendrerit est. In hac habitasse platea
          dictumst. Nulla a pharetra mauris. Aliquam sodales, mauris et tincidunt varius, tortor arcu interdum urna,
          vitae interdum quam eros sit amet magna. Suspendisse fringilla nec odio vel ornare. Nullam vitae magna at
          lacus iaculis posuere. Donec a tellus leo. Aliquam viverra, ex sed eleifend ultrices, sem turpis congue
          turpis, fermentum pulvinar ipsum quam a arcu. Etiam quis porttitor lorem. Integer ac enim sit amet lorem
          lacinia sollicitudin. Curabitur ut augue sed elit varius sollicitudin. Sed a consectetur nibh, sed dignissim
          nisl. In hac habitasse platea dictumst. Maecenas quis tellus ullamcorper, faucibus enim at, maximus risus.
          Etiam eros urna, feugiat tincidunt aliquet id, euismod nec risus. Duis tristique augue at nisl facilisis, non
          porta odio malesuada. In nec iaculis dolor. Suspendisse eros mi, rutrum et magna vitae, molestie dictum risus.
          Donec et sapien nulla. Nunc at malesuada dolor. Sed viverra erat a nisi aliquam, sit amet facilisis nisl
          ultrices. Nam suscipit, nibh sed congue venenatis, dui velit dapibus urna, ac molestie nulla augue eget velit.
          Sed ultricies ultrices dolor sit amet accumsan. Suspendisse finibus pretium turpis sed hendrerit. Aliquam
          elementum et augue ullamcorper facilisis. Fusce non nibh diam.
          Pellentesque fringilla velit vel sem rutrum faucibus. Nulla facilisi. Aliquam risus eros, sodales quis iaculis
          quis, pharetra eu nunc. Nullam non aliquam nisi. Vivamus sit amet ullamcorper erat. Mauris nibh eros, porta id
          odio quis, feugiat tincidunt sem. Suspendisse vitae odio ex. Aenean sollicitudin pharetra turpis quis
          faucibus. Nam tincidunt nibh nisi, varius volutpat velit rhoncus ac. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Nulla porttitor eu eros quis congue. Proin purus libero,
          sodales sed posuere a, volutpat sit amet tellus. Sed rutrum sodales nisl.
          Integer scelerisque consectetur eros viverra dignissim. Quisque nec lacus non odio mattis condimentum maximus
          eu ipsum. Aenean varius vestibulum lacus porta aliquam. Sed elit ipsum, vulputate non nisi a, bibendum iaculis
          est. In scelerisque lectus ut augue varius, vel molestie metus pretium. Suspendisse nec ante ac nulla placerat
          iaculis. Nullam laoreet sit amet odio ut laoreet. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec sit amet urna dignissim, euismod nibh blandit, tincidunt enim. In at erat nec nibh blandit
          facilisis. Cras maximus nisl a dolor imperdiet, sed laoreet ante malesuada. Integer scelerisque, velit nec
          aliquam gravida, dui mauris elementum turpis, in semper velit sem dapibus lorem. Sed varius, ante non eleifend
          consequat, justo nisl sodales dui, in lacinia tortor velit eu ligula. In in elit quis lorem malesuada finibus
          non ac risus. Phasellus eget eros magna. Morbi dignissim tempus vulputate.
          Donec posuere tellus turpis, nec malesuada nisi finibus et. Maecenas vestibulum justo sit amet blandit
          ullamcorper. Sed eu condimentum dui. Ut dapibus dui at magna vulputate luctus quis quis tortor. Pellentesque
          sollicitudin consequat maximus. Sed laoreet vel purus ac varius. Nullam quis sagittis nibh. Ut pulvinar sapien
          non molestie vestibulum. Suspendisse eget eros pharetra, congue lacus a, iaculis arcu. Morbi placerat, lacus
          nec ultricies malesuada, est nisi laoreet nunc, non porta odio tortor quis mi. Phasellus non aliquam eros.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus hendrerit est. In hac habitasse platea
          dictumst. Nulla a pharetra mauris. Aliquam sodales, mauris et tincidunt varius, tortor arcu interdum urna,
          vitae interdum quam eros sit amet magna. Suspendisse fringilla nec odio vel ornare. Nullam vitae magna at
          lacus iaculis posuere. Donec a tellus leo. Aliquam viverra, ex sed eleifend ultrices, sem turpis congue
          turpis, fermentum pulvinar ipsum quam a arcu. Etiam quis porttitor lorem. Integer ac enim sit amet lorem
          lacinia sollicitudin. Curabitur ut augue sed elit varius sollicitudin. Sed a consectetur nibh, sed dignissim
          nisl. In hac habitasse platea dictumst. Maecenas quis tellus ullamcorper, faucibus enim at, maximus risus.
          Etiam eros urna, feugiat tincidunt aliquet id, euismod nec risus. Duis tristique augue at nisl facilisis, non
          porta odio malesuada. In nec iaculis dolor. Suspendisse eros mi, rutrum et magna vitae, molestie dictum risus.
          Donec et sapien nulla. Nunc at malesuada dolor. Sed viverra erat a nisi aliquam, sit amet facilisis nisl
          ultrices. Nam suscipit, nibh sed congue venenatis, dui velit dapibus urna, ac molestie nulla augue eget velit.
          Sed ultricies ultrices dolor sit amet accumsan. Suspendisse finibus pretium turpis sed hendrerit. Aliquam
          elementum et augue ullamcorper facilisis. Fusce non nibh diam.
          Pellentesque fringilla velit vel sem rutrum faucibus. Nulla facilisi. Aliquam risus eros, sodales quis iaculis
          quis, pharetra eu nunc. Nullam non aliquam nisi. Vivamus sit amet ullamcorper erat. Mauris nibh eros, porta id
          odio quis, feugiat tincidunt sem. Suspendisse vitae odio ex. Aenean sollicitudin pharetra turpis quis
          faucibus. Nam tincidunt nibh nisi, varius volutpat velit rhoncus ac. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Nulla porttitor eu eros quis congue. Proin purus libero,
          sodales sed posuere a, volutpat sit amet tellus. Sed rutrum sodales nisl.
          Integer scelerisque consectetur eros viverra dignissim. Quisque nec lacus non odio mattis condimentum maximus
          eu ipsum. Aenean varius vestibulum lacus porta aliquam. Sed elit ipsum, vulputate non nisi a, bibendum iaculis
          est. In scelerisque lectus ut augue varius, vel molestie metus pretium. Suspendisse nec ante ac nulla placerat
          iaculis. Nullam laoreet sit amet odio ut laoreet. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec sit amet urna dignissim, euismod nibh blandit, tincidunt enim. In at erat nec nibh blandit
          facilisis. Cras maximus nisl a dolor imperdiet, sed laoreet ante malesuada. Integer scelerisque, velit nec
          aliquam gravida, dui mauris elementum turpis, in semper velit sem dapibus lorem. Sed varius, ante non eleifend
          consequat, justo nisl sodales dui, in lacinia tortor velit eu ligula. In in elit quis lorem malesuada finibus
          non ac risus. Phasellus eget eros magna. Morbi dignissim tempus vulputate.
          Donec posuere tellus turpis, nec malesuada nisi finibus et. Maecenas vestibulum justo sit amet blandit
          ullamcorper. Sed eu condimentum dui. Ut dapibus dui at magna vulputate luctus quis quis tortor. Pellentesque
          sollicitudin consequat maximus. Sed laoreet vel purus ac varius. Nullam quis sagittis nibh. Ut pulvinar sapien
          non molestie vestibulum. Suspendisse eget eros pharetra, congue lacus a, iaculis arcu. Morbi placerat, lacus
          nec ultricies malesuada, est nisi laoreet nunc, non porta odio tortor quis mi. Phasellus non aliquam eros.
        </p>
      </div>
        <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}