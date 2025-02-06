import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],
		ignores: [
			'node_modules/',
			'built/*',
			'coverage/*',
			'eslint.config.js',
			'parser.js',
			'test/*',
			'test-d/*',
			'jest.config.ts',
		],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'indent': ['error', 'tab', {
        'SwitchCase': 1,
        'MemberExpression': 'off', 
        'flatTernaryExpressions': true,
        'ArrayExpression': 'first',
        'ObjectExpression': 'first',
      }],
      'eol-last': ['error', 'always'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'keyword-spacing': ['error', {
        'before': true,
        'after': true,
      }],
      'key-spacing': ['error', {
        'beforeColon': false,
        'afterColon': true,
      }],
      'space-infix-ops': ['error'],
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'nonblock-statement-body-position': ['error', 'beside'],
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-multi-spaces': ['error'],
      'no-var': ['error'],
      'prefer-arrow-callback': ['error'],
      'no-throw-literal': ['error'],
      'no-param-reassign': ['warn'],
      'no-constant-condition': ['warn', {
        checkLoops: false,
      }],
      'no-empty-pattern': ['warn'],

      // TypeScript rules
      '@typescript-eslint/no-unnecessary-condition': ['warn', {
        allowConstantLoopConditions: true,
      }],
      '@typescript-eslint/no-inferrable-types': ['warn'],
      '@typescript-eslint/no-non-null-assertion': ['warn'],
      '@typescript-eslint/explicit-function-return-type': ['warn'],
      '@typescript-eslint/no-misused-promises': ['error', {
        'checksVoidReturn': false,
      }],
      '@typescript-eslint/no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
      }]
		}
	}
]
