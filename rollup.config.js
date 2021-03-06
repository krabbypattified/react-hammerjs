import uglify from 'rollup-plugin-uglify'

export default {
	name: 'ReactHammer',
	input: 'src/Hammer.js',
	output: {
		file: 'dist/react-hammerjs-iife.min.js',
		format: 'iife',
	},
	plugins: [uglify()],
}
