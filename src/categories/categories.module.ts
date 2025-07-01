import { forwardRef, Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { Catalog } from 'src/catalogs/catalog.entity';
import { CatalogsModule } from 'src/catalogs/catalogs.module'; // ✅

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Catalog]),
    forwardRef(() => CatalogsModule), // ✅ Fix circular dependency
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [TypeOrmModule, CategoriesService],
})
export class CategoriesModule {}
