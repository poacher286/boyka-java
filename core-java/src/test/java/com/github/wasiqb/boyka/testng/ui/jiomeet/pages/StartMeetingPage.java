/*
 * MIT License
 *
 * Copyright (c) 2023, Wasiq Bhamla
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

package com.github.wasiqb.boyka.testng.ui.jiomeet.pages;

import static org.openqa.selenium.By.id;
import static org.openqa.selenium.By.tagName;

import com.github.wasiqb.boyka.builders.Locator;
import lombok.Getter;

@Getter
public class StartMeetingPage {
    private static final StartMeetingPage START_MEETING_PAGE = new StartMeetingPage ();

    public static StartMeetingPage startMeetingPage () {
        return START_MEETING_PAGE;
    }

    private final Locator oneTimeID = Locator.buildLocator ()
        .name ("One Time Meeting ID")
        .web (id ("dynamic"))
        .build ();
    private final Locator start     = Locator.buildLocator ()
        .name ("Start Button")
        .web (tagName ("button"))
        .filter (e -> e.getText ()
            .equals ("Start"))
        .build ();

    private StartMeetingPage () {
        // Utility class.
    }
}
