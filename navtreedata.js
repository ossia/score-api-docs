/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_clear_selection_8hpp_source.html",
"_file_8hpp_source.html",
"_model_consistency_8hpp_source.html",
"_scenario_creation___from_time_sync_8hpp_source.html",
"_visitor_common_8hpp.html#a8d559f67dc0ff9986a09c9ca82bdf8f9",
"class_base_graphics_object.html#a4c6e4a7f3715753bfe44a0bbcfd06802",
"class_curve_1_1_edition_settings.html#a8072cc19d6b8dd14ab441d6032ec3516",
"class_curve_1_1_state_base.html",
"class_data_stream_writer.html#a3052cc63b433318ab6c950666c721302",
"class_dataflow_1_1_port_item.html#a8cef1fa168b7ea4eb3e536303f781e53",
"class_execution_1_1_control_clock.html",
"class_execution_1_1_step_component.html",
"class_explorer_1_1_device_explorer_model.html#a417d091504a48a74bd18cc5b55c4ff4a",
"class_gfx_1_1_filter_1_1_model.html#ad0be772fb77644c47a1ff9736e9ea942",
"class_gfx_1_1kinect2__node.html#a3989c41ff576936316979b596d5495db",
"class_interpolation_1_1_inspector_factory.html",
"class_j_s_o_n_reader.html#ac9871e1ae028377211b6d83c87377b32",
"class_library_1_1_preset_filter_proxy.html#aeea151933512a4f8b2d5617eee089695",
"class_media_1_1_set_max.html",
"class_midi_1_1_replace_notes.html#a2191e41d85004b794a873d4b1c09c74e",
"class_opaque_string.html#ac2137d51cc24a149c3442d982cbb9373",
"class_process_1_1_change_port_address.html",
"class_process_1_1_layer_presenter.html#ae35b15d21850f697cf8c84dc36ed134c",
"class_process_1_1_process_model.html#aafc3ce22b89700609775317e52441e3c",
"class_protocols_1_1_o_s_c_query_protocol_settings_widget.html#afa21b189ece72bca6273531e0dcd56d6",
"class_scenario_1_1_base_scenario.html#ad7bfe17398874acd1447802636f68972",
"class_scenario_1_1_command_1_1_duplicate_interval.html#a928ec290a1c9bee647458493aedc5c5b",
"class_scenario_1_1_command_1_1_set_condition.html#afd9c292235c335090a1aab3d0c5342a7",
"class_scenario_1_1_duration_widget.html",
"class_scenario_1_1_interval_drop_handler_list.html#a554ef98a87c6f1eea626ac21c02a1ff6",
"class_scenario_1_1_interval_view.html#a920ee127dfa0263e5435a6a27723d8b5",
"class_scenario_1_1_move_on_slot_handle___transition.html#ae7df8317ff81af256b9289e2d7958a02",
"class_scenario_1_1_scenario_document_presenter.html#af6945dc9487e25a0df83f8480b9b9f4b",
"class_scenario_1_1_slot_footer.html#aa70803ff68b0fe21a2e6389496c3d2a5",
"class_scenario_1_1_time_sync_model.html#a1c1f5d6c4fa147fc01fdad30656ce50f",
"class_spline3_d_1_1_process_model.html#a41fa02bfcf719c979d221a14db45c78d",
"class_token_request_value_type.html#a166a4813b500435522f1fd140f259bd7",
"class_vec3f_value_type.html#a82bb7a688be77b56e3326fe4da914f0c",
"classscore_1_1_application_registrar.html#a8e759d804faa0d8edd53bd9d29cc68f3",
"classscore_1_1_document_validator.html#a7c9908c25b7f716066ad9faa9b1538e6",
"classscore_1_1_int_slider.html#a67410c14ad237fe350b34e43891cd628",
"classscore_1_1_property_command___t.html#ad010e6c75c0cfdb5bafacf4d61e723ce",
"classscore_1_1_settings.html",
"classscore_1_1_variant_based_node.html#a28b7f070b615225e8f4da12a78a4ee0f",
"classscore__plugin__inspector.html#a6483a4f19dfbeda0cf49775c2a1b7ab3",
"classvst_1_1_application_plugin.html#ab560b6e272a75443e9c673b7e3d1ebc7",
"plugins_2score-plugin-vst3_2_vst3_2commands_8hpp_source.html",
"struct_control_1_1_chooser_toggle.html",
"struct_curve_1_1_curve_domain.html#a287fe65a50ada2075647f40cb09854e0",
"struct_execution_1_1_handle_node_change.html#aa2c1b517621ab95bfd51a49a45128dc3",
"struct_gfx_1_1_spout_node.html#a346fa4139be0b131d5f1e9f7fc2d3315",
"struct_l_v2_1_1_global_context.html#a0d9b77784e38c3108aeac07b4b383a1e",
"struct_media_1_1_sound_1_1_computed_waveform.html",
"struct_nodes_1_1_debug_1_1_node.html",
"struct_process_1_1_control_setup.html#a94bab3be048d189a89fb2dc93c96f763",
"struct_protocols_1_1_o_s_c_compatible_check.html#ac5202e8a572016c38d62e9e0c295cb77",
"struct_recording_1_1_record_automation_creation_visitor.html#afc135f2bad48d95fcb21f1ccffd31c7d",
"struct_scenario_1_1_displayed_elements_presenter_container.html#aa3a3d8a2ce073bd8178a5b4b306212e5",
"struct_scenario_1_1get__curve__domain.html#a9df64ca333f4a8060ca14e227db07853",
"struct_t_serializer_3_01_data_stream_00_01std_1_1variant_3_01_args_8_8_8_01_4_01_4.html#a3598dcb68fe0ba287da411336a8980ff",
"structboost_1_1spirit_1_1traits_1_1push__back__container_3_01_q_string_00_01_q_char_01_4.html",
"structscore_1_1_document_list.html#a588038eda01cc6ce01951d123f8f5a4f",
"structscore_1_1_start_screen_link.html",
"structscore_1_1gfx_1_1_h_a_p_decoder_1_1_h_a_p_section.html#a140d831bdb4bf377876b82b775936f6b",
"structscore_1_1indirect__iterator.html#afa0da5c10a7dfc0ab6d2d37e52877f0c",
"structvst_1_1_v_s_t_info.html#a54b2fc9286eaced9c6ba2d50e315c7f4"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';