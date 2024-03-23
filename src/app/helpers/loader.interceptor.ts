import { inject } from '@angular/core';
import { HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader/loader.service';

export const loaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const loaderService: LoaderService = inject(LoaderService);

  loaderService.showLoader();

  return next(req).pipe(
    finalize(() => loaderService.hideLoader())
  )
};