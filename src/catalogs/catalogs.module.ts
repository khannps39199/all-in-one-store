import { forwardRef, Module } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';
import { CategoriesModule } from 'src/categories/categories.module'; // ✅

@Module({
  imports: [
    TypeOrmModule.forFeature([Catalog]),
    forwardRef(() => CategoriesModule), // ✅ Fix circular dependency
  ],
  providers: [CatalogsService],
  controllers: [CatalogsController],
  exports: [TypeOrmModule, CatalogsService],
})
export class CatalogsModule {}
