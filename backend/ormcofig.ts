import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
	type: 'sqlite',
	database: 'qoverdb',
	entities: ['dist/src/**/entities/*.entity.ts'],
	synchronize: true
}

export default config;