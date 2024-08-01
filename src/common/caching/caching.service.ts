import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

import { Cache } from 'cache-manager';

import { ObjectType } from '../base.interface';

@Injectable()
export class CachingService {
	@Inject(CACHE_MANAGER) private cache: Cache
	// constructor(
	// ) { }

	async set<TValue extends ObjectType>(identity: string, value: TValue): Promise<void> {
		let data: TValue;
		if (!value || (Array.isArray(value) && !value.length)) return;
		if (typeof value === 'object') {
			data = { ...value };
		}
		this.cache.set(identity, data, 0);
	}

	async get<TData>(identity: string): Promise<TData> {
		return this.cache.get<TData>(identity);
	}

	async delete(identity: string): Promise<void> {
		this.cache.del(identity);
	}

	async reset(): Promise<void> {
		this.cache.reset();
	}

	async keys(): Promise<string[]> {
		return this.cache.store.keys();
	}

}
