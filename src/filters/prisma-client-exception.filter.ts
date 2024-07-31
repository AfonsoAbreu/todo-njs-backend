import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

const PRISMA_ERROR_CODES = {
  UNIQUE_CONSTRAINT_VIOLATION: 'P2002',
};

const RESPONSES = {
  [PRISMA_ERROR_CODES.UNIQUE_CONSTRAINT_VIOLATION]: {
    statusCode: HttpStatus.CONFLICT,
    message: 'Duplicate record.',
  }
};

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {

  public catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(JSON.stringify(exception));
    
    const response = host
      .switchToHttp()
      .getResponse<Response>();

    const responseContent = RESPONSES[exception.code];

    if (responseContent === undefined) {
      super.catch(exception, host);
    }

    response
      .status(responseContent.statusCode)
      .json(responseContent);
  }
}