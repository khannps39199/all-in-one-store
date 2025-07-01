import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogsModule } from './catalogs/catalogs.module';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { AccountsModule } from './accounts/accounts.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '2609',
      database: 'all_in_store_nestJS',
      synchronize: false, // set false in production
      options: {
        encrypt: false, // important for local SQL Server
        trustServerCertificate: true, // allow self-signed
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    CatalogsModule,
    CategoriesModule,
    AccountsModule,
  ],
  controllers: [AppController, CategoriesController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
