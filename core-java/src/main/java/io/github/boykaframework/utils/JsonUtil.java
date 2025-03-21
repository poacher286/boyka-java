/*
 * MIT License
 *
 * Copyright (c) 2024, Boyka Framework
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

package io.github.boykaframework.utils;

import static com.google.common.reflect.TypeToken.of;
import static com.google.gson.FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES;
import static com.google.gson.JsonParser.parseString;
import static org.apache.logging.log4j.LogManager.getLogger;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import io.github.boykaframework.enums.Message;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.Logger;

/**
 * Parser class to read and write json files.
 *
 * @author Wasiq Bhamla
 * @since 17-Feb-2022
 */
public final class JsonUtil {
    private static final Gson   GSON;
    private static final Logger LOGGER = getLogger ();

    static {
        GSON = new GsonBuilder ().setFieldNamingPolicy (LOWER_CASE_WITH_UNDERSCORES)
            .registerTypeAdapter (String.class, new StringPlaceholderDeserializer ())
            .registerTypeAdapter (Map.class, new MapPlaceholderDeserializer ())
            .setPrettyPrinting ()
            .create ();
    }

    /**
     * Reads the JSON file.
     *
     * @param filePath the file path to be read
     * @param objectClass the class of the object where data will be saved
     * @param <T> the type of the object
     *
     * @return the object instance
     */
    public static <T> T fromFile (final String filePath, final Class<T> objectClass) {
        LOGGER.traceEntry ("filePath: {}, objectClass: {}", filePath, objectClass);
        T result = null;
        try (final var reader = new FileReader (filePath)) {
            result = GSON.fromJson (reader, of (objectClass).getType ());
        } catch (final FileNotFoundException e) {
            ErrorHandler.handleAndThrow (Message.NO_JSON_FILE_FOUND, e, filePath);
        } catch (final JsonSyntaxException e) {
            ErrorHandler.handleAndThrow (Message.JSON_SYNTAX_ERROR, e);
        } catch (final IOException e) {
            ErrorHandler.handleAndThrow (Message.ERROR_READING_FILE, e, filePath);
        }
        return LOGGER.traceExit (result);
    }

    /**
     * Writes the object to the JSON file.
     *
     * @param data the object to be written
     * @param filePath the file path to be written
     * @param <T> the type of the object
     */
    public static <T> void toFile (final T data, final String filePath) {
        LOGGER.traceEntry ("data: {}, filePath: {}", data, filePath);
        try (final var writer = new FileWriter (filePath)) {
            GSON.toJson (data, writer);
        } catch (final IOException e) {
            ErrorHandler.handleAndThrow (Message.ERROR_WRITING_FILE, e, filePath);
        }
        LOGGER.traceExit ();
    }

    /**
     * Converts the object to JSON.
     *
     * @param data the object to be converted
     * @param <T> the type of the object
     *
     * @return the JSON string
     */
    public static <T> String toString (final T data) {
        LOGGER.traceEntry ("data: {}", data);
        return LOGGER.traceExit (GSON.toJson (data));
    }

    /**
     * Converts the JSON string to pretty JSON string.
     *
     * @param data JSON string
     *
     * @return pretty JSON string
     */
    public static String toString (final String data) {
        if (StringUtils.isEmpty (data)) {
            return StringUtils.EMPTY;
        }
        try {
            final var object = parseString (data).getAsJsonObject ();
            return LOGGER.traceExit (GSON.toJson (object));
        } catch (final IllegalStateException | JsonSyntaxException e) {
            return data;
        }
    }

    private JsonUtil () {
        // Utility class.
    }
}
