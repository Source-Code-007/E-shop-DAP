import { motion } from 'framer-motion'

const MyMotion = ({ children, delay=.2, x=0, y=0, scale=1 }) => {
    return <motion.div
        variants={{
            hidden: { opacity: 0, x: x, y: y , scale: scale },
            visible: { opacity: 1, x: 0, y: 0, scale: 1 }
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ delay , type: 'spring', stiffness: 70 }}
    >
        {children}
    </motion.div>

};

export default MyMotion;