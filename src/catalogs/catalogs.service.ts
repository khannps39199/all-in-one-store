import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from 'src/DTOS/CreateCategory.dto';
import { Catalog } from 'src/catalogs/catalog.entity';
import { Category } from 'src/categories/categories.entity';

@Injectable()
export class CatalogsService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
    @InjectRepository(Catalog)
    private readonly catalogRepo: Repository<Catalog>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const catalog = await this.catalogRepo.findOneBy({ id: dto.catalogId });

    if (!catalog) {
      throw new NotFoundException(`Catalog with ID ${dto.catalogId} not found`);
    }

    const category = this.categoryRepo.create({
      name: dto.name,
      catalog: catalog,
    });

    return this.categoryRepo.save(category);
  }

  findAll(): Promise<Catalog[]> {
    return this.catalogRepo.find();
  }
}
