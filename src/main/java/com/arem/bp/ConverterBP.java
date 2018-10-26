package com.arem.bp;

import java.math.BigDecimal;

import com.arem.model.ConverterModel;
import com.arem.model.ResponseModel;
import com.arem.util.Currency;

public interface ConverterBP {
	
	public ResponseModel getConvertedValue(Currency source, Currency target, BigDecimal amount);
	public ConverterModel getConverterModel();

}
